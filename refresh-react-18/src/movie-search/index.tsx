import { Movies } from './components/movies';
import { useMovies } from './hooks/movies.hook';

function SearchMovies() {
  const { movies } = useMovies();

  return (
    <div className='w-full min-h-screen bg-gray-900 text-white px-10 py-6'>
      <header className='flex items-center justify-between mb-10'>
        <h1 className='text-2xl font-bold'>Buscar películas</h1>
        <form>
          <input
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
