import { Creator } from './creator';

export interface CreatorDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Creator>;
}
