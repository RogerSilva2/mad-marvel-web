import { SeriesSummary } from './series-summary';

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SeriesSummary>;
}
