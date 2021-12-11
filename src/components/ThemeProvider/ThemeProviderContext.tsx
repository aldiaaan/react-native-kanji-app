import {createContext} from 'react';

export type ThemeProviderContextType = {
  theme?: any;
};

export const ThemeProviderContext = createContext<ThemeProviderContextType>(
  null as any,
);
