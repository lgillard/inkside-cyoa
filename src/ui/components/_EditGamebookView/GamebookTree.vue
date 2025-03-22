<template>
  <v-network-graph
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
         @keydown.enter="handleNodeClick(nodeId, $event)"
         @keydown.space="handleNodeClick(nodeId, $event)"
         @click="handleNodeClick(nodeId, $event)">
        <circle :r="config.radius * scale" :fill="config.color" v-bind="slotProps" />
      </a>
    </template>
  </v-network-graph>
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
import * as vNG from "v-network-graph";
import {
  type Layouts,
  VNetworkGraph,
  VEdgeLabel
} from "v-network-graph";
import dagre from "dagre/dist/dagre.min.js";
import {GamebookTree} from "@/domain/models/GamebookTree.ts";
import {NetworkElmtFactory} from "@/domain/NetworkElmtFactory.ts";
import {useTheme} from "vuetify";

const colors = useTheme().global.current.value.colors;

const configs = vNG.defineConfigs({
  view: {
    autoPanAndZoomOnLoad: "fit-content",
    onBeforeInitialDisplay: () => updateNodesPosition(),
    zoomEnabled: false,
  },
  node: {
    draggable: false,
    selectable: 1,
    normal: { color: colors.secondary },
    hover: { color: colors.secondary },
    focusring: { color: colors.secondary },
    label: { color: colors["on-background"] },
  },
  edge: {
    selectable: 1,
    normal: { color: colors.secondary },
    hover: { color: colors.secondary },
    selected: {
      width: 6,
      color: colors.primary,
      dasharray: "0",
    },
    label: { color: colors["on-background"] },
  }
})

const { gamebook = new GamebookTree()} = defineProps({gamebook: GamebookTree});
const networkFactory = new NetworkElmtFactory(gamebook);

const nodes = ref(networkFactory.buildNodes());
const edges = ref(networkFactory.buildEdges());
const layouts: Layouts = reactive({
  nodes: {},
})
const selectedNodes = ref<string[]>([])

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

function handleNodeClick(nodeId: string, event: KeyboardEvent) {
  event.preventDefault();
  selectedNodes.value = [nodeId];
}
</script>

<style lang="scss">
.graph {
  height: 65vh;
}
</style>
