import { PaginationInfo } from "./utilities.model";

export interface Episodes {
  info: PaginationInfo;
  results: EpisodesResult[];
}

export interface EpisodesResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
