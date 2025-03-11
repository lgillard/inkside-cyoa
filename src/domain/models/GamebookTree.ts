interface Section { id: string, title: string }
interface Path {sourceId: string, targetId: string}

export class GamebookTree {
  id: string;
  title: string;
  sections: Array<Section>;
  paths: Array<Path>;

  constructor(id: string,
              title: string,
              sections: Array<Section> = [],
              paths: Array<Path> = []) {
    this.id = id;
    this.title = title;
    this.sections = sections;
    this.paths = paths;
  }
}
