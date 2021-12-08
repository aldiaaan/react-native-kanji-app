import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';

type AppStackParamList = {
  HomeScreen: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="HomeScreen">
      <AppStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => null}}
      />
    </AppStack.Navigator>
  );
};
