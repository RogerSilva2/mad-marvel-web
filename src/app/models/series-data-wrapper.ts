import { SeriesDataContainer } from './series-data-container';

export interface SeriesDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: SeriesDataContainer;
  etag: string;
}
