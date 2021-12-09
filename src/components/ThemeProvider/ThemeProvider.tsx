import React from 'react';
import {BaseTheme, ThemeProviderContext} from './ThemeProviderContext';

export type ThemeProviderProps = {
  theme?: BaseTheme;
  children?: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {children, theme = {}} = props;

  return (
    <ThemeProviderContext.Provider value={{theme}}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
