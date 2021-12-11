import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './navigators/AppNavigator';
import {ThemeProvider} from './components/ThemeProvider';
import {lightTheme} from './constants/theme';

export const Root = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <AppNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
