import type {Path} from "@/domain/models/Path.ts";

export class Section {
  id: string = '';
  title: string = '';
  content: string = '';
  isEnd: boolean = false;
  types: string[] = [];
  paths: Array<Path> = [];
}
