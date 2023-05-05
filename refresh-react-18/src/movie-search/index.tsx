import { Movies } from './components/movies';
import { useMovies } from './hooks/movies.hook';
import { FormEvent, useCallback, useState } from 'react';
import { useSearch } from './hooks/search.hook';
import debounce from 'just-debounce-it';

function SearchMovies() {
  const { search, setSearch } = useSearch();
  const [sort, setSort] = useState(false);
  const { movies, getMovies } = useMovies(search, sort);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies(search).then();
    //const fields = Object.fromEntries(new window.FormData(e.currentTarget));
  };

  const onSort = () => {
    setSort(!sort);
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget as HTMLInputElement;
    setSearch(value);
    debounceGetMovies(value);
  };

  const debounceGetMovies = useCallback(
    debounce((search: string) => getMovies(search), 500),
    [],
  );

  return (
    <div className='w-full min-h-screen bg-gray-900 text-white px-10 py-6'>
      <header className='flex items-center justify-between mb-10'>
        <h1 className='text-2xl font-bold'>Buscar películas</h1>
        <form onSubmit={onSubmit}>
          <input type='checkbox' onChange={onSort} className='mr-3' />
          <input
            onInput={onChange}
            value={search}
            type='text'
            placeholder='Avengers, Star Wars, Matrix...'
            className='py-2 px-5 bg-gray-700 rounded-lg mr-3 min-w-[300px] text-white outline-0'
          />
          <button className='bg-red-400 text-white py-2 px-5 rounded-lg hover:bg-red-500 hover:transition'>
            Buscar
          </button>
        </form>
      </header>
      <main>
        <Movies list={movies} />
      </main>
    </div>
  );
}

export default SearchMovies;
