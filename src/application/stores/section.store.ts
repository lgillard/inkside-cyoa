import { defineStore } from 'pinia';
import {SectionAPIRepository} from "@/infrastructure/repositories/SectionAPIRepository.ts";
import type {SectionRepository} from "@/domain/repositories/SectionRepository.ts";
import type {Section} from "@/domain/models/Section.ts";

interface SectionState {
  sections: Section[];
  currentSection: Section | null;
  loading: boolean;
  error: string | null;
}

const sectionRepository: SectionRepository = new SectionAPIRepository();

export const useSectionStore = defineStore('section', {
  state: (): SectionState => ({
    sections: [],
    currentSection: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchById(id: string): Promise<Section> {
      this.loading = true;
      this.error = null;

      try {
        const section = await sectionRepository.getById(id);

        this.currentSection = section;
        return section;
      } catch (error: unknown) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async create(formData: Section): Promise<Section> {
      this.loading = true;
      this.error = null;

      try {
        const section = await sectionRepository.create(formData);

        this.currentSection = section;
        return section;
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
