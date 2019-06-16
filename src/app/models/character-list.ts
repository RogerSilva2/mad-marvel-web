import { CharacterSummary } from './character-summary';

export interface CharacterList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CharacterSummary>;
}
