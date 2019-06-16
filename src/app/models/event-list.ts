import { EventSummary } from './event-summary';

export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<EventSummary>;
}
