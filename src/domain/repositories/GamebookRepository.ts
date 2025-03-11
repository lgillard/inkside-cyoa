import type {Gamebook} from "@/domain/models/Gamebook.ts";

export interface GamebookRepository {
  getAll(): Promise<Gamebook[]>;
  getById(id: string): Promise<Gamebook>;
  create(gamebook: Gamebook): Promise<Gamebook>;
  edit(gamebook: Gamebook): Promise<Gamebook>;
  delete(id: string): Promise<void>;
}
