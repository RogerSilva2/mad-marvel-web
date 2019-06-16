import { CreatorDataContainer } from './creator-data-container';

export interface CreatorDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CreatorDataContainer;
  etag: string;
}
