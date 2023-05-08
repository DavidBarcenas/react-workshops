import { AddToCartIcon } from './icons';
import { useState } from 'react';
import { useFilters } from '../hooks/use-filters';
import { products as productsMock } from '../mocks/products.json';

export function Products() {
  const [products] = useState(productsMock);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <main>
      <ul className='grid grid-cols-5 gap-5 auto-rows-max'>
        {filteredProducts.map((product) => (
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
