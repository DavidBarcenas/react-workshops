import { useContext } from 'react';
import { Product } from '../interfaces/product';
import { FiltersContext } from '../context/filters-provider';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filterProducts, filters, setFilters };
}
