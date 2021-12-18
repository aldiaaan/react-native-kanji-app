import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {AppStackParamList} from '../../navigators/AppNavigator';
import {KanjiList} from './components/KanjiList';

export const KanjiListScreen = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'KanjiListScreen'>>();

  const {theme} = useTheme<AppTheme>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <KanjiList data={params.kanjis} style={{flex: 1}} numColumns={4} />
    </SafeAreaView>
  );
};
