import {GamebookTree, type Path, type Section} from "@/domain/models/GamebookTree.ts";
import type {Edges, Nodes} from "v-network-graph";

export class NetworkElmtFactory {
  private gamebookTree: GamebookTree;

  constructor(gamebookTree: GamebookTree) {
    this.gamebookTree = gamebookTree;
  }

  buildNodes(): Nodes {
    const result: Nodes = {};
    for (const section of this.gamebookTree.sections) {
      result[section.id] = {id: section.id, name: section.title};
    }
    return result;
  }

  buildEdges(): Edges {
    const result: Edges = {};
    for (const path of this.gamebookTree.paths) {
      result[path.sourceId+'_to_'+path.targetId] = {target: path.targetId, source: path.sourceId};
    }
    return result;
  }
}
