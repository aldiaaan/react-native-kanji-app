import {createContext} from 'react';

export type BaseTheme = {
  spacing?: {[key: string]: number};
  colors?: {
    [key: string]: string;
  };
};

export type ThemeProviderContextType = {
  theme?: BaseTheme;
};

export const ThemeProviderContext = createContext<ThemeProviderContextType>(
  null as any,
);
