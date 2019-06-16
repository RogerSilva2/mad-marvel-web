import { Url } from './url';
import { Image } from './image';
import { SeriesList } from './series-list';
import { StoryList } from './story-list';
import { ComicList } from './comic-list';
import { EventList } from './event-list';

export interface Creator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: Image;
  series: SeriesList;
  stories: StoryList;
  comics: ComicList;
  events: EventList;
}
