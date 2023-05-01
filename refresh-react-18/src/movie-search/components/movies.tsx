import { Movie } from '../models/movie';

interface Props {
  list: Movie[];
}

export function Movies({ list }: Props) {
  return list.length ? (
    <ul className='grid grid-cols-5 gap-8 m-0 p-0'>
      {list.map((movie) => (
        <li key={movie.id}>
          <img src={movie.poster} alt={movie.title} className='w-full max-h-[80%] object-contain' />
          <div className='p-4'>
            <h2 className='text-xl font-bold'>{movie.title}</h2>
            <div className='flex items-center justify-between'>
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
