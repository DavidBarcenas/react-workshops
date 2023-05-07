import { Filters } from './filters';

export function Header() {
  return (
    <header className='flex justify-between mb-6 mt-3'>
      <h1 className='text-2xl font-bold'>Carrito de compras</h1>
      <Filters />
    </header>
  );
}
