import type {Section} from "@/domain/models/Section.ts";

export interface SectionRepository {
  getById(id: string): Promise<Section>;
  create(section: Section): Promise<Section>;
}
