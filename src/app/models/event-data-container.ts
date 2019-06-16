import { Event } from './event';

export interface EventDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Event>;
}
