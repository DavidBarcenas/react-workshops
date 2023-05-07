import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type FiltersType = {
  category: string;
  minPrice: number;
};

interface ProviderProps {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
}

const initialValue: FiltersType = {
  category: 'all',
  minPrice: 0,
};

export const FiltersContext = createContext<ProviderProps>({
  filters: initialValue,

  setFilters: () => null,
});

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FiltersType>(initialValue);
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}
