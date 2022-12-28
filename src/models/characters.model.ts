import { NameAndUrlObject, PaginationInfo } from "./utilities.model";

export interface Characters {
  info: PaginationInfo,
  results: CharactersResults[];
}

export interface CharactersResults {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: NameAndUrlObject;
    location: NameAndUrlObject;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

