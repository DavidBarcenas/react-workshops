import { Movie } from '../models/movie';

interface Props {
  list: Movie[];
}

export function Movies({ list }: Props) {
  return list.length ? (
    <ul className='grid grid-cols-auto-fill gap-8 m-0 p-0'>
      {list.map((movie) => (
        <li key={movie.id}>
          <img src={movie.poster} alt={movie.title} className='w-full min-h-[300px] object-cover' />
          <div className='py-2'>
            <h2 className='font-bold mb-2'>{movie.title}</h2>
            <div className='flex items-center justify-between text-sm text-gray-400'>
              <span>{movie.year}</span>
              <span>{movie.type}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No se encontraron películas para tu bÚsqueda</p>
  );
}
