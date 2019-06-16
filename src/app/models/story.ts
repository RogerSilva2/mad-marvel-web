import { Image } from './image';
import { ComicList } from './comic-list';
import { SeriesList } from './series-list';
import { EventList } from './event-list';
import { CharacterList } from './character-list';
import { CreatorList } from './creator-list';
import { ComicSummary } from './comic-summary';

export interface Story {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail?: Image;
  comics: ComicList;
  series: SeriesList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  originalissue: ComicSummary;
}
