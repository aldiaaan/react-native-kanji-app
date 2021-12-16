import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Text} from 'react-native';
import {AppStackParamList} from '../../navigators/AppNavigator';

export const WebViewScreen = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'WebViewScreen'>>();

  return <Text>{params.url}</Text>;
};
