import { defineStore } from 'pinia';
import {GamebookAPIRepository} from "@/infrastructure/repositories/GamebookAPIRepository.ts";
import type {GamebookRepository} from "@/domain/repositories/GamebookRepository.ts";
import type {Gamebook} from "@/domain/models/Gamebook.ts";

interface GamebookState {
  gamebooks: Gamebook[];
  currentGamebook: Gamebook | null;
  loading: boolean;
  error: string | null;
}

const gamebookRepository: GamebookRepository = new GamebookAPIRepository();

export const useGamebookStore = defineStore('gamebook', {
  state: (): GamebookState => ({
    gamebooks: [],
    currentGamebook: null,
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

    async fetchGamebookById(id: string): Promise<Gamebook> {
      this.loading = true;
      this.error = null;

      try {
        const gamebook = await gamebookRepository.getById(id);

        this.currentGamebook = gamebook;
        return gamebook;
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

    async deleteGamebook(id: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        await gamebookRepository.delete(id);

        this.gamebooks = this.gamebooks.filter(g => g.id !== id);

        if (this.currentGamebook?.id === id) {
          this.currentGamebook = null;
        }
        if (this.currentGamebookTree?.id === id) {
          this.currentGamebookTree = null;
        }
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
