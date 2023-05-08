import { Dispatch, SetStateAction } from 'react';

export interface Filters {
  category: string;
  minPrice: number;
}

export interface FiltersContextProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<{ category: string; minPrice: number }>>;
}
