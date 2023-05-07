import { Products } from './components/products';
import { products as productsMock } from './mocks/products.json';
import { useState } from 'react';
import { Header } from './components/header';
import { useFilters } from './hooks/use-filters';

export function ShoppingCart() {
  const [products] = useState(productsMock);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className='bg-gray-100 p-4'>
      <Header />
      <Products list={filteredProducts} />
    </div>
  );
}
