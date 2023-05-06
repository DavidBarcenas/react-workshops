import { Product } from '../interfaces/product';
import { AddToCartIcon } from './icons';

interface Props {
  list: Product[];
}

export function Products({ list }: Props) {
  return (
    <main>
      <ul className='grid grid-cols-5 gap-5 auto-rows-max'>
        {list.map((product) => (
          <li key={product.id} className='bg-white rounded-sm pb-4'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-full h-[150px] object-cover'
            />
            <div className='p-4 flex items-center justify-between'>
              <strong>{product.title}</strong>
              <span>${product.price}</span>
            </div>
            <button className='flex items-center justify-center gap-3 bg-black text-white rounded-md px-4 py-1.5 text-sm m-auto'>
              Agregar al carrito
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
