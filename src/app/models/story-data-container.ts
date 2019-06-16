import { Story } from './story';

export interface StoryDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Story>;
}
