import { Url } from './url';
import { Image } from './image';
import { ComicList } from './comic-list';
import { StoryList } from './story-list';
import { EventList } from './event-list';
import { SeriesList } from './series-list';

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}
