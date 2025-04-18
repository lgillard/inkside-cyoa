import type {Gamebook} from "@/domain/models/Gamebook.ts";
import type {GamebookTree} from "@/domain/models/GamebookTree.ts";

export interface GamebookRepository {
  getAll(): Promise<Gamebook[]>;
  getTree(id: string): Promise<GamebookTree>;
  create(gamebook: Gamebook): Promise<Gamebook>;
  edit(gamebook: Gamebook): Promise<Gamebook>;
  editTitle(gamebookId: string, newTitle: string): Promise<Gamebook>;
}
