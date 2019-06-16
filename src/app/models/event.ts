import { Url } from './url';
import { Image } from './image';
import { ComicList } from './comic-list';
import { StoryList } from './story-list';
import { SeriesList } from './series-list';
import { CharacterList } from './character-list';
import { CreatorList } from './creator-list';
import { EventSummary } from './event-summary';

export interface Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<Url>;
  modified: string;
  start: string;
  end: string;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  series: SeriesList;
  characters: CharacterList;
  creators: CreatorList;
  next: EventSummary;
  previous: EventSummary;
}
