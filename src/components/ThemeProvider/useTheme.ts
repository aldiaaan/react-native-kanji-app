import {useContext} from 'react';

import {ThemeProviderContext} from './ThemeProviderContext';

export const useTheme = <T = any>() => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error(
      'useTheme: `context` is undefined. Seems you forgot to wrap component within the ThemeProvider',
    );
  }

  return {
    theme: context.theme as T,
  };
};
