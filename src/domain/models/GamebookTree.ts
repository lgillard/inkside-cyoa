export interface Section { id: string, title: string }
export interface Path {sourceId: string, targetId: string}

export class GamebookTree {
  id: string;
  title: string;
  sections: Array<Section>;
  paths: Array<Path>;

  constructor() {
    this.id = '';
    this.title = '';
    this.sections = [];
    this.paths = [];
  }
}
