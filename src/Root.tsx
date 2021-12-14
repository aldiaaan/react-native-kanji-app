import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './navigators/AppNavigator';
import {ThemeProvider} from './components/ThemeProvider';
import {lightTheme} from './constants/theme';

const queryClient = new QueryClient();

export const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
