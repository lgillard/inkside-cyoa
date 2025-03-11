import {id} from "vuetify/locale";

export class Gamebook {
  id: string|null;
  title: string;
  authorName: string;
  coverColor: string;

  constructor(id: string|null,
              title: string,
              authorName: string,
              coverColor: string) {
    this.id = id;
    this.title = title;
    this.authorName = authorName;
    this.coverColor = coverColor;
  }
}
