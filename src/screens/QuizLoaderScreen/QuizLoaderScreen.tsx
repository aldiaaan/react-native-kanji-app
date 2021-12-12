import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {AppStackParamList} from '../../navigators/AppNavigator';

import * as KanjiService from '../../services/kanji/KanjiService';

export const QuizLoaderScreen = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'QuizLoaderScreen'>>();

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const {theme} = useTheme<AppTheme>();

  const {isFetching} = useQuery(
    ['kanji', params.level],
    async () => {
      return await KanjiService.fetchQuestionsByGradeLevel(params.level!, 20);
    },
    {
      onSuccess: result => {
        navigation.replace('QuizScreen', {questions: result});
      },
      onError: () => {
        navigation.goBack();
      },
    },
  );

  return (
    <SafeAreaView
      style={[styles.flexGrow, {backgroundColor: theme.colors.background}]}>
      {isFetching && <Text>loading...</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexGrow: {
    flex: 1,
  },
});
