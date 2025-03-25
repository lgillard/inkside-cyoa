<template>
  <v-card variant="outlined" color="primary">
    <!-- Action bar-->
    <div id="gamebook-tree-action-toolbar">
      <v-btn-toggle multiple :model-value="['section']" color="">
        <v-btn @click="configs.node.label.visible = !configs.node.label.visible" value="section">
          <v-icon v-if="configs.node.label.visible" :icon="mdiEye" title="Cacher"/>
          <v-icon v-else :icon="mdiEyeOff" title="Afficher"/>
          <span class="ml-2">Section</span>
        </v-btn>
        <v-btn @click="configs.edge.label.color = areEdgeLabelsVisible ? '#00000000' : colors['on-background']" value="choix">
          <v-icon v-if="areEdgeLabelsVisible" :icon="mdiEye" title="Cacher"/>
          <v-icon v-else :icon="mdiEyeOff" title="Afficher"/>
          <span class="ml-2">Choix</span>
        </v-btn>
      </v-btn-toggle>

      <div>
        <v-btn title="Dézoomer" variant="text" @click="graph?.zoomOut()">
          <v-icon :icon="mdiMagnifyMinus"
                  color="on_surface"
                  size="x-large"/>
        </v-btn>
        <v-btn title="Zoomer" variant="text" @click="graph?.zoomIn()">
          <v-icon :icon="mdiMagnifyPlus"
                  color="on_surface"
                  size="x-large"/>
        </v-btn>
        <v-btn title="Recentrer" @click="graph?.fitToContents()" variant="text">
          <v-icon :icon="mdiImageFilterCenterFocusStrong"
                  color="on_surface"
                  size="x-large" />
        </v-btn>
      </div>
    </div>

    <!-- Arbre des sections -->
    <v-network-graph
      ref="graph"
      class="graph"
      v-model:selected-nodes="selectedNodes"
      :nodes="nodes"
      :edges="edges"
      :layouts="layouts"
      :configs="configs">
      <template #edge-label="{ edge, ...slotProps }">
        <v-edge-label :text="edge.label" align="center" vertical-align="above" v-bind="slotProps" />
      </template>
      <template #override-node="{ nodeId, scale, config, ...slotProps }">
        <a xlink:href="#"
           @keydown.enter="selectNode(nodeId, $event)"
           @keydown.space="selectNode(nodeId, $event)"
           @click="selectNode(nodeId, $event)">
          <circle :r="config.radius * scale"
                  :fill="config.color"
                  v-bind="slotProps"
                  :stroke="config.strokeColor"
                  :stroke-width="config.strokeWidth"
                  :stroke-dasharray="config.strokeDasharray"/>
          <title>{{nodes[nodeId].name}}</title>
          <desc>
            Prochaines sections:
            <template v-for="path in nodes[nodeId].obj.paths">{{nodes[path.target].name}}</template>
          </desc>
        </a>
      </template>
    </v-network-graph>

    <!-- Menu contextuel -->
    <SectionMenu v-if="selectedNodes.length > 0"
                 :section="nodes[selectedNodes[0]].obj"
                 :x="menuX"
                 :y="menuY"/>
  </v-card>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import * as vNG from "v-network-graph";
import {type Layouts, VEdgeLabel, VNetworkGraph} from "v-network-graph";
import dagre from "dagre/dist/dagre.min.js";
import {GamebookTree} from "@/domain/models/GamebookTree.ts";
import {NetworkElmtFactory} from "@/domain/NetworkElmtFactory.ts";
import {useTheme} from "vuetify";
import {
  mdiEye,
  mdiEyeOff,
  mdiImageFilterCenterFocusStrong,
  mdiMagnifyMinus,
  mdiMagnifyPlus
} from "@mdi/js";
import SectionMenu from "@/ui/components/_EditGamebookView/SectionMenu.vue";

const colors = useTheme().global.current.value.colors;

const graph = ref<vNG.Instance>()

const initialConfigs = vNG.defineConfigs({
  view: {
    autoPanAndZoomOnLoad: "fit-content",
    onBeforeInitialDisplay: () => updateNodesPosition(),
  },
  node: {
    draggable: false,
    selectable: 1,
    normal: {
      strokeWidth:  node => node.obj.content ? 0 : 3,
      strokeColor:  colors.secondary,
      strokeDasharray: 5,
      color: node => node.obj.content ? colors.secondary : '#00000000',
    },
    hover: {
      color: node => node.obj.content ? colors.secondary : '#00000000',
    },
    focusring: { color: colors.secondary },
    label: {
      color: colors["on-background"],
      visible: true,
    },
  },
  edge: {
    selectable: 1,
    margin: 6,
    normal: {color: colors.secondary},
    hover: {color: colors.secondary},
    selected: {
      width: 6,
      color: colors.primary,
      dasharray: "0",
    },
    label: { color: '#00000000' },
    marker: {
      target: {
        type: "arrow",
        width: 4,
        height: 4,
        margin: -1,
        units: "strokeWidth",
      },
    }
  }
});

const configs = reactive(initialConfigs);

const { gamebook = new GamebookTree()} = defineProps({gamebook: GamebookTree});
const networkFactory = new NetworkElmtFactory(gamebook);

const nodes = ref(networkFactory.buildNodes());
const edges = ref(networkFactory.buildEdges());
const layouts: Layouts = reactive({
  nodes: {},
})
const selectedNodes = ref<string[]>([])

const menuX = ref(0);
const menuY = ref(0);

function updateNodesPosition() {
  if (Object.keys(nodes.value).length <= 1 || Object.keys(edges.value).length == 0) {
    return
  }

  const nodeSize = 40;
  const g = new dagre.graphlib.Graph()
  g.setGraph({
    rankdir: 'LR',
    nodesep: nodeSize * 2,
    edgesep: nodeSize,
    ranksep: nodeSize * 2,
  })
  g.setDefaultEdgeLabel(() => ({}))
  Object.entries(nodes.value).forEach(([nodeId, node]) => {
    g.setNode(nodeId, { label: node.name, width: nodeSize, height: nodeSize })
  })

  Object.values(edges.value).forEach(edge => {
    g.setEdge(edge.source, edge.target)
  })

  dagre.layout(g)

  g.nodes().forEach((nodeId: string) => {
    const x = g.node(nodeId).x
    const y = g.node(nodeId).y
    layouts.nodes[nodeId] = { x, y }
  })
}

function selectNode(nodeId: string, event: KeyboardEvent) {
  event.preventDefault();

  // As "view:click" event is not working I need to use v-model to detect node unselected. 
  // May PointerEvent be triggered after v-model changes so PointerEvent trigger unselection
  if(selectedNodes.value[0] !== nodeId || event instanceof PointerEvent) {
    selectedNodes.value = [nodeId];

    const coords = event.target.getBoundingClientRect();
    menuX.value = coords.x;
    menuY.value = coords.y;

  // Unselect if already selected
  } else {
    selectedNodes.value = [];
  }
}

const areEdgeLabelsVisible = computed(() => {
  return configs.edge.label.color === colors['on-background'];
});
</script>

<style lang="scss">
.graph {
  height: 65vh;
}
#gamebook-tree-action-toolbar {
  position: absolute;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;

  * {
    z-index: 1;
  }
}
</style>
