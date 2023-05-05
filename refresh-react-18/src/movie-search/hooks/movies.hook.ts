import { Movie } from '../models/movie';
import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/search-movies.service';

export function useMovies(searchTerm: string, sort: boolean) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const previousSearch = useRef(searchTerm);

  const getMovies = useCallback(async (searchTerm: string) => {
    if (previousSearch.current === searchTerm) return;

    try {
      setLoading(true);
      setError(null);
      const newMovies = await searchMovies(searchTerm);
      setMovies(newMovies);
      previousSearch.current = searchTerm;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, loading, error, getMovies };
}
