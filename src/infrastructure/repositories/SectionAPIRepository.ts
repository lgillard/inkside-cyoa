import type {SectionRepository} from "@/domain/repositories/SectionRepository.ts";
import {Section} from "@/domain/models/Section.ts";

export class SectionAPIRepository implements SectionRepository {
  getById(id: string): Promise<Section> {
    return Promise.resolve(
      new Section(
        id,
        'Section ' + id,
        'Once upon a time in a old castle ... This paragraph is a part of your own story !',
        [
          {source: id, target: id+1, title: "1st choice"},
          {source: id, target: id+2, title: "2nd choice"},
        ]
      )
    );
  }

  create(section: Section): Promise<Section> {
    section.id = 12;
    return Promise.resolve(section);
  }
}
