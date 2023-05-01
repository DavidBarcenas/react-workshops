import { mockData } from '../mocks/results';
import { Movie } from '../models/movie';

export function useMovies() {
  const mappedMovies: Movie[] = mockData.Search.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
