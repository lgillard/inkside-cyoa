import type {GamebookRepository} from "@/domain/repositories/GamebookRepository.ts";
import {Gamebook} from "@/domain/models/Gamebook.ts";
import {GamebookTree} from "@/domain/models/GamebookTree.ts";

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

  getTree(id: string): Promise<GamebookTree> {
    return Promise.resolve(
      new GamebookTree(
        id,
        'A random title',
        [
          {id: '1', title: '1'},
          {id: '2', title: '2'},
          {id: '3', title: '3'},
          {id: '4', title: '4'},
        ],
        [
          {sourceId: '1', targetId: '2'},
          {sourceId: '1', targetId: '3'},
          {sourceId: '3', targetId: '4'},
        ]
      )
    );
  }
}
