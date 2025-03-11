interface Path {targetId: string, title: string}

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
