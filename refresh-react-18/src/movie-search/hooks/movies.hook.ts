import { Movie } from '../models/movie';
import { useState } from 'react';
import { SearchResult } from '../models/search-result';

export function useMovies(searchTerm: string) {
  const [responseMovies, setResponseMovies] = useState<Movie[]>([]);

  const getMovies = () => {
    if (searchTerm) {
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${searchTerm}`)
        .then((response) => response.json())
        .then((data: SearchResult) =>
          setResponseMovies(
            data.Search.map((movie) => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              type: movie.Type,
              poster: movie.Poster,
            })),
          ),
        );
    } else {
      setResponseMovies([]);
    }
  };

  return { movies: responseMovies, getMovies };
}
