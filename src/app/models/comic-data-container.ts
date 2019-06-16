import { Comic } from './comic';

export interface ComicDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Comic>;
}
