import { Url } from './url';
import { Image } from './image';
import { ComicList } from './comic-list';
import { StoryList } from './story-list';
import { EventList } from './event-list';
import { CharacterList } from './character-list';
import { CreatorList } from './creator-list';
import { SeriesSummary } from './series-summary';

export interface Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<Url>;
  startYear: number;
  endYear: number;
  rating: string;
  modified: string;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  next: SeriesSummary;
  previous: SeriesSummary;
}
