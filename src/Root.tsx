import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './navigators/AppNavigator';
import {ThemeProvider} from './components/ThemeProvider';
import {lightTheme} from './constants/theme';

export const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <AppNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
