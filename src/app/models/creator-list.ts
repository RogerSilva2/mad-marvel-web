import { CreatorSummary } from './creator-summary';

export interface CreatorList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<CreatorSummary>;
}
