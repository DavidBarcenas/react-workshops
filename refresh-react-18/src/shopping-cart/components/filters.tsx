import { FormEvent, useId } from 'react';
import { useFilters } from '../hooks/use-filters';

export function Filters() {
  const { filters, setFilters } = useFilters();
  const priceId = useId();
  const categoryId = useId();

  const handlePriceRange = (e: FormEvent<HTMLInputElement>) => {
    const value = (e?.target as HTMLInputElement).valueAsNumber;
    setFilters((prev) => ({ ...prev, minPrice: value }));
  };

  return (
    <section className='flex items-center justify-between gap-4'>
      <div>
        <label htmlFor={priceId} className='mr-2'>
          Precio
        </label>
        <input
          type='range'
          id={priceId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handlePriceRange}
        />
        <span className='inline-block min-w-[50px] ml-2'>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId} className='mr-2'>
          Categoría
        </label>
        <select id={categoryId}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  );
}
