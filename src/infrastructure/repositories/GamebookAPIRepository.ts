import type {GamebookRepository} from "@/domain/repositories/GamebookRepository.ts";
import {Gamebook} from "@/domain/models/Gamebook.ts";

export class GamebookAPIRepository implements GamebookRepository {
  delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAll(): Promise<Gamebook[]> {
    return Promise.resolve([
      new Gamebook('1', 'Mon incroyable aventure', 'Monsieur Charles', '#EE8152'),
      new Gamebook('2', 'Il était une fois', 'CK. Martins', '#EE8152'),
      new Gamebook('3', 'Magic magic', 'Jule jule', '#EE8152'),
    ]);
  }

  getById(id: string): Promise<Gamebook> {
    return Promise.resolve(new Gamebook('1', 'Mon incroyable aventure', 'Monsieur Charles', '#EE8152'));
  }

  create(gamebook: Gamebook): Promise<Gamebook> {
    gamebook.id = '2';
    return Promise.resolve(gamebook);
  }

  edit(gamebook: Gamebook): Promise<Gamebook> {
    return Promise.resolve(gamebook);
  }
}
