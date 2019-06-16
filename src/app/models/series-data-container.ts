import { Series } from './series';

export interface SeriesDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Series>;
}
