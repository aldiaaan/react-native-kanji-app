import React from 'react';
import {StatusBar, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <Text>asdasd</Text>
    </SafeAreaView>
  );
};
