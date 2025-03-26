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
          {
            id: '1',
            title: 'Labirynthe de Thanosyn',
            content: 'Vous pénétrer dans les ténèbre du labyrinthe...',
            isEnd: false,
            types: [],
            paths: [
              {title: 'Tourner à gauche', source: '1', target: '2'},
              {title: 'Tourner à droite', source: '1', target: '3'},
            ]
          }, {
            id: '2',
            title: 'Descente aux enfers',
            content: 'Vous trébucher sur un piège et mourrez de façon ridicule... Dommage.',
            isEnd: true,
            types: ['tragicEnd'],
            paths: []
          }, {
            id: '3',
            title: 'Sortie du labirynthe',
            content: '',
            isEnd: false,
            types: [],
            paths: [
              {title: 'Franchir la sortie', source: '3', target: '4'}
            ]
          }, {
            id: '4',
            title: 'Happy end',
            content: 'Bravo vous vous en êtes sorti',
            isEnd: false,
            types: [],
            paths: [
              {title: 'Franchir la sortie', source: '4', target: '5'}
            ]
          }, {
            id: '5',
            title: 'Paradis du chat',
            content: 'blabla',
            isEnd: false,
            types: [],
            paths: [
              {title: 'Combattre', source: '5', target: '6'}
            ]
          }, {
            id: '6',
            title: 'Combat des démons',
            content: 'aie',
            isEnd: false,
            types: ['fight'],
            paths: [
              {title: 'Attraper la poële', source: '6', target: '7'},
              {title: 'Attraper la machette', source: '6', target: '8'}
            ]
          }, {
            id: '7',
            title: 'Assommer le monstre',
            content: 'il vous regarde et ris',
            isEnd: false,
            types: [],
            paths: []
          }, {
            id: '8',
            title: 'Couper la tête',
            content: 'La lame semble tranchante',
            isEnd: false,
            types: [],
            paths: [
              {title: 'Combattre', source: '8', target: '9'}
            ]
          }, {
            id: '9',
            title: 'Happy end',
            content: 'Bravo vous vous en êtes sorti',
            isEnd: true,
            types: ['happyEnd'],
            paths: []
          },
        ],
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
