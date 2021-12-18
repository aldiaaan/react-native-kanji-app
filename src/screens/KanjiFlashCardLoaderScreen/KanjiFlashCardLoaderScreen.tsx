import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useQuery} from 'react-query';
import {AppStackParamList} from '../../navigators/AppNavigator';
import * as KanjiService from '../../services/kanji/KanjiService';

export const KanjiFlashCardLoaderScreen = () => {
  const {params} =
    useRoute<RouteProp<AppStackParamList, 'KanjiListLoaderScreen'>>();

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const {} = useQuery(
    ['kanjis', params.level],
    async () => {
      const kanjis = await KanjiService.fetchKanjisByGradeLevel(params.level);

      return kanjis;
    },
    {
      onSuccess: kanjis => {
        navigation.replace('KanjiFlashCardScreen', {kanjis});
      },
    },
  );

  return <></>;
};
