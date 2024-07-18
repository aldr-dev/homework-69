export interface ApiFetchShows  {
  id: number;
  name: string;
}

export interface ApiDetailsShows extends ApiFetchShows {
  language: string;
  genres: string[];
  runtime: string;
  premiered: string;
  officialSite: string;
  image: {medium: string};
  summary: string;
}

