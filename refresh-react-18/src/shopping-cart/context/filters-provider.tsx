import { createContext, ReactNode, useState } from 'react';
import { Filters, FiltersContextProps } from '../interfaces/context-props';

export const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}
