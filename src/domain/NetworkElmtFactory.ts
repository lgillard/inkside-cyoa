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
    for (const section of this.gamebookTree.sections) {
      for (const path of section.paths) {
        result[path.source + '_to_' + path.target] = {
          target: path.target,
          source: path.source,
          label: path.title
        };
      }
    }
    return result;
  }
}
