import type {SectionRepository} from "@/domain/repositories/SectionRepository.ts";
import {Section} from "@/domain/models/Section.ts";

export class SectionAPIRepository implements SectionRepository {
  getById(id: string): Promise<Section> {
    return Promise.resolve(
      new Section(
        id,
        id,
        'Once upon a time in a old castle ... This paragraph is a part of your own story !',
        [
          {targetId: id+1, title: "1st choice"},
          {targetId: id+2, title: "2nd choice"},
        ]
      )
    );
  }

}
