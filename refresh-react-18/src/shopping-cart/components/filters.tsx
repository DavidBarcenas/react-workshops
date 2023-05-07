import { FormEvent, useId, useState } from 'react';

export function Filters() {
  const [range, setRange] = useState(0);
  const priceId = useId();
  const categoryId = useId();

  const handlePriceRange = (e: FormEvent<HTMLInputElement>) => {
    const value = (e?.target as HTMLInputElement).valueAsNumber;
    setRange(value);
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
          value={range}
          onChange={handlePriceRange}
        />
        <span className='inline-block min-w-[50px] ml-2'>${range}</span>
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
