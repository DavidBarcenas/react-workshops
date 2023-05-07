import { useState } from 'react';
import { Product } from '../interfaces/product';

export function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters };
}
