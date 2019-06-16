import { ComicSummary } from './comic-summary';

export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<ComicSummary>;
}
