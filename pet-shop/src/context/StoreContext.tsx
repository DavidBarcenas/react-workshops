import { createContext } from 'react';

import { useInitialState } from '../hooks/useInitialState';
import type { Product, StoreState } from '../types/product';

type ContextProps = {
  state: StoreState;
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
};

export const Storecontext = createContext({} as ContextProps);

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const initialState = useInitialState();

  return <Storecontext.Provider value={initialState}>{children}</Storecontext.Provider>;
};
