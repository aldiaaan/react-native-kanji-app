import React from 'react';
import {ThemeProviderContext} from './ThemeProviderContext';

export type ThemeProviderProps = {
  theme?: any;
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
