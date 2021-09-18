import { createContext } from "react";

type ThemeProps = {
  background: 'white' | 'black'
}

export const ThemeContext = createContext({} as ThemeProps)