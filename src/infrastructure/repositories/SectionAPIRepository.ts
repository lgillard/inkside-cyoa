import type {SectionRepository} from "@/domain/repositories/SectionRepository.ts";
import {Section} from "@/domain/models/Section.ts";

export class SectionAPIRepository implements SectionRepository {
  create(section: Section): Promise<Section> {
    section.id = 12;
    return Promise.resolve(section);
  }

  update(section: Section): Promise<Section> {
    return Promise.resolve(section);
  }
}
