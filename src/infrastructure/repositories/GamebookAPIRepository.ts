import type {GamebookRepository} from "@/domain/repositories/GamebookRepository.ts";
import {Gamebook} from "@/domain/models/Gamebook.ts";
import {GamebookTree} from "@/domain/models/GamebookTree.ts";

export class GamebookAPIRepository implements GamebookRepository {
  delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAll(): Promise<Gamebook[]> {
    return Promise.resolve([
      Object.assign(new Gamebook(), {
        id: '1',
        title: 'Mon incroyable aventure',
        authorName: 'Mr. Charles',
        coverColor: '#EE8152',
      }),
      Object.assign(new Gamebook(), {
        id: '123',
        title: 'Il était une fois',
        authorName: 'Martins Martins',
        coverColor: '#1F1DE1',
      }),
      Object.assign(new Gamebook(), {
        id: '666',
        title: 'Welcome to magic hell',
        authorName: 'John Jule',
        coverColor: '#EE8152',
      }),
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
      Object.assign(new GamebookTree(), {
        id,
        title: 'Alice au pays des enfers...',
        sections: [
          {id: '1', title: '1'},

          {id: '2', title: '2'},
          {id: '3', title: '3'},
          {id: '4', title: '4'},
        ],
        paths: [
          {sourceId: '1', targetId: '2'},
          {sourceId: '1', targetId: '3'},
          {sourceId: '3', targetId: '4'},
        ]
      })
    );
  }

  editTitle(gamebookId: string, newTitle: string): Promise<Gamebook> {
    return Promise.resolve(
      Object.assign(new Gamebook(), {
        id: gamebookId,
        title: newTitle,
        authorName: 'John Doe',
        coverColor: '#1F1DE1',
      })
    );
  }
}
