import { Movie } from '../models/movie';
import { useRef, useState } from 'react';
import { searchMovies } from '../services/search-movies.service';

export function useMovies(searchTerm: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const previouseSearch = useRef(searchTerm);

  const getMovies = async () => {
    if (previouseSearch.current === searchTerm) return;

    try {
      setLoading(true);
      setError(null);
      const newMovies = await searchMovies(searchTerm);
      setMovies(newMovies);
      previouseSearch.current = searchTerm;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, getMovies };
}
