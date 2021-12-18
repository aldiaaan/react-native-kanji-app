import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import {AppStackParamList} from '../../navigators/AppNavigator';
import * as KanjiService from '../../services/kanji/KanjiService';

export const KanjiListLoaderScreen = () => {
  const {params} =
    useRoute<RouteProp<AppStackParamList, 'KanjiListLoaderScreen'>>();

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const {} = useQuery(
    ['kanji-list', params.level],
    async () => {
      const kanjis = await KanjiService.fetchKanjisByGradeLevel(params.level);

      return kanjis;
    },
    {
      onSuccess: kanjis => {
        navigation.replace('KanjiListScreen', {kanjis});
      },
    },
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Loading ...</Text>
    </SafeAreaView>
  );
};
