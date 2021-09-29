import { createContext } from 'react';
import { InitState, useInitialState } from '../hooks/useInitialState';

export const Storecontext = createContext({} as InitState);

export const StoreProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const initialState = useInitialState();

  return <Storecontext.Provider value={initialState}>{children}</Storecontext.Provider>;
};
