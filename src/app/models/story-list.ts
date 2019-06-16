import { StorySummary } from './story-summary';

export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<StorySummary>;
}
