import type {WordRepository} from "@/domain/repositories/WordRepository.ts";
import {WordInMemoryRepository} from "@/infrastructure/repositories/WordInMemoryRepository.ts";

export class RandomTitleGenerator {
  private wordRepository: WordRepository;

  constructor() {
    this.wordRepository = new WordInMemoryRepository();
  }

  public generateSectionTitle(): string {
    const adjective = this.capitalizeFirstLetter(this.getRandomItem(this.wordRepository.getAdjectives()));
    const location = this.getRandomItem(this.wordRepository.getLocation());
    const details = this.getRandomItem(this.wordRepository.getDetails());

    return `${adjective} ${location} ${details}`;
  }

  public generatePathTitle(): string {
    const structures = [
      () => `${verb} ${object}`,
      () => `${verb} ${object} ${adjective}`,
      () => `${verb} ${adverb} ${object}`,
      () => `${verb} ${object} ${adverb}`,
    ];

    const verb = this.capitalizeFirstLetter(this.getRandomItem(this.wordRepository.getVerbs()));
    const object = this.getRandomItem(this.wordRepository.getObjects());
    const adjective = this.getRandomItem(this.wordRepository.getAdjectives());
    const adverb = this.getRandomItem(this.wordRepository.getAdverbs());

    return this.getRandomItem(structures)();
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private capitalizeFirstLetter(text: string) {
    return text.replace(/^./, text[0].toUpperCase())
  }
}
