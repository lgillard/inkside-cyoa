import type {Section} from "@/domain/models/Section.ts";

export interface SectionRepository {
  create(section: Section): Promise<Section>;
  update(section: Section): Promise<Section>;
}
