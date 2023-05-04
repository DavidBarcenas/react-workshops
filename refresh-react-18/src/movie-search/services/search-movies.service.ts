import { SearchResult } from '../models/search-result';
import { Movie } from '../models/movie';

export async function searchMovies(searchTerm: string): Promise<Movie[]> {
  if (!searchTerm) {
    return [];
  }

  return fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${searchTerm}`)
    .then((response) => response.json())
    .then((data: SearchResult) =>
      data.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster,
      })),
    )
    .catch((error) => {
      throw new Error(error);
    });
}
