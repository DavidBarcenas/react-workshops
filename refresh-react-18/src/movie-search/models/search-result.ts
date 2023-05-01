export interface SearchResult {
  Search: Search[];
  totalResults: string;
  Response: ResponseType;
}

export interface EmptyResult {
  Response: ResponseType;
  Error: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type ResponseType = 'True' | 'False';
