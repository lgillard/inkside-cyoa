import { defineStore } from 'pinia';
import {GamebookAPIRepository} from "@/infrastructure/repositories/GamebookAPIRepository.ts";
import type {GamebookRepository} from "@/domain/repositories/GamebookRepository.ts";
import type {GamebookTree} from "@/domain/models/GamebookTree.ts";
import type {Gamebook} from "@/domain/models/Gamebook.ts";

interface GamebookState {
  gamebooks: Gamebook[];
  currentGamebook: Gamebook | null;
  currentGamebookTree: GamebookTree | null;
  loading: boolean;
  error: string | null;
}

const gamebookRepository: GamebookRepository = new GamebookAPIRepository();

export const useGamebookStore = defineStore('gamebook', {
  state: (): GamebookState => ({
    gamebooks: [],
    currentGamebook: null,
    currentGamebookTree: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchGamebooks(): Promise<Gamebook[]> {
      this.loading = true;
      this.error = null;

      try {
        const gamebooks = await gamebookRepository.getAll();

        this.gamebooks = gamebooks;
        return gamebooks;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchGamebookTree(id: string): Promise<GamebookTree> {
      this.loading = true;
      this.error = null;

      try {
        const gamebookTree = await gamebookRepository.getTree(id);

        this.currentGamebookTree = gamebookTree;
        return gamebookTree;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createGamebook(gamebook: Gamebook): Promise<Gamebook> {
      this.loading = true;
      this.error = null;

      try {
        const savedGamebook = await gamebookRepository.create(gamebook);

        // Mettre à jour la liste des gamebooks si nécessaire
        if (!gamebook.id) {
          this.gamebooks.push(savedGamebook);
        } else {
          // C'est une mise à jour, on remplace l'existant
          const index = this.gamebooks.findIndex(g => g.id === savedGamebook.id);
          if (index !== -1) {
            this.gamebooks[index] = savedGamebook;
          }
        }

        return savedGamebook;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async editGamebook(gamebook: Gamebook): Promise<Gamebook> {
      this.loading = true;
      this.error = null;

      try {
        const savedGamebook = await gamebookRepository.edit(gamebook);

        const index = this.gamebooks.findIndex(g => g.id === savedGamebook.id);
        if (index !== -1) {
          this.gamebooks[index] = savedGamebook;
        }

        return savedGamebook;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async editGamebookTitle(gamebookId: string, newTitle: string): Promise<Gamebook> {
      this.loading = true;
      this.error = null;

      try {
        const savedGamebook = await gamebookRepository.editTitle(gamebookId, newTitle);

        if(gamebookId === this.currentGamebookTree.id) {
          this.currentGamebookTree.title = savedGamebook.title;
        }

        const index = this.gamebooks.findIndex(g => g.id === savedGamebook.id);
        if (index !== -1) {
          this.gamebooks[index] = savedGamebook;
        }

        return savedGamebook;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    resetError(): void {
      this.error = null;
    }
  }
});
