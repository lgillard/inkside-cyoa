<template>
  <v-network-graph
    class="graph"
    v-model:selected-nodes="selectedNodes"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>
<script setup lang="ts">
import {reactive, ref} from "vue";
import * as vNG from "v-network-graph";
import {
  type Layouts,
  VNetworkGraph
} from "v-network-graph";
import dagre from "dagre/dist/dagre.min.js";
import {GamebookTree} from "@/domain/models/GamebookTree.ts";
import {NetworkElmtFactory} from "@/domain/NetworkElmtFactory.ts";

const configs = vNG.defineConfigs({
  view: {
    autoPanAndZoomOnLoad: "fit-content",
    onBeforeInitialDisplay: () => updateNodesPosition(),
    zoomEnabled: false,
  },
  node: {
    draggable: false,
    selectable: 1,
  },
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
</script>

<style lang="scss">
.graph {
  height: 65vh;
}
</style>
