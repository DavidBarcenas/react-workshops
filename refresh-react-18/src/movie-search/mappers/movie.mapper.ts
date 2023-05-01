import { Search } from '../models/search-result';
import { Movie } from '../models/movie';

export function mapToModel(source: Search): Movie {
  return {
    id: source.imdbID,
    title: source.Title,
    year: source.Year,
    poster: source.Poster,
    type: source.Type,
  };
}
