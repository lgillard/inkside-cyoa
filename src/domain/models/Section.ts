import type {Path} from "@/domain/models/Path.ts";

export class Section {
  id: string;
  title: string;
  content: string;
  paths: Array<Path>;

  constructor(id: string, title: string, content: string, paths: Array<Path>) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.paths = paths;
  }
}
