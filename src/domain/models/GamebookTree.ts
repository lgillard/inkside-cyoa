import type {Path} from "@/domain/models/Path.ts";
import type {Section} from "@/domain/models/Section.ts";

export class GamebookTree {
  id: string;
  title: string;
  sections: Array<Section>;

  constructor() {
    this.id = '';
    this.title = '';
    this.sections = [];
  }
}
