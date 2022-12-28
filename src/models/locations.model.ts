import { PaginationInfo } from "./utilities.model";

export interface Locations {
  info: PaginationInfo;
  results: LocationsResults[];
}

export interface LocationsResults {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}