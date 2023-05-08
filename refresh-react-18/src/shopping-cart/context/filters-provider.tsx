import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface FiltersContextProps {
  filters: {
    category: string;
    minPrice: number;
  };
  setFilters: Dispatch<SetStateAction<{ category: string; minPrice: number }>>;
}

export const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}
