import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useImmer} from 'use-immer';
import {SafeAreaView} from 'react-native-safe-area-context';

import {KanjiQuestion} from './components/KanjiQuestion';

import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {KanjiTypes} from '../../constants/kanji';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {AppStackParamList} from '../../navigators/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

export const QuizScreen = () => {
  const {theme} = useTheme<AppTheme>();

  const [answers, setAnswers] = useImmer<
    {value?: string; id?: string; correctValue?: string}[]
  >([]);

  const {params} = useRoute<RouteProp<AppStackParamList, 'QuizScreen'>>();

  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const [answerIndex, setAnswerIndex] = useState(0);

  const handleNextQuestion = useCallback(() => {
    setAnswerIndex(prev => prev + 1);
  }, [setAnswerIndex]);

  useEffect(() => {
    if (answers.length === params.questions.length) {
      let wrongCount = answers.reduce((acc, answer) => {
        if (answer.value !== answer.correctValue) {
          acc = acc + 1;
        }

        return acc;
      }, 0);

      navigation.replace('QuizResultScreen', {
        correctCount: params.questions.length - wrongCount,
        wrongCount,
      });
    }
  }, [answers, navigation, params.questions.length]);

  const handleOptionPress = useCallback(
    ({
      id,
      value,
      correctValue,
    }: {
      id?: string;
      value?: string;
      correctValue?: string;
    }) => {
      setAnswers(draft => {
        const answer = draft.find(item => item.id === id);

        if (answer) {
          answer.value = value;
        } else {
          draft.push({id, value, correctValue});
        }
      });
    },
    [setAnswers],
  );

  return (
    <SafeAreaView
      style={[styles.page, {backgroundColor: theme.colors.background}]}>
      {params.questions.slice(answerIndex, answerIndex + 1).map(question => (
        <KanjiQuestion
          key={question.id}
          id={question.id}
          style={styles.flexGrow}
          type={question.type as KanjiTypes}
          value={answers.find(answer => answer.id === question.id)?.value}
          label={question.label}
          kanji={question.kanji}
          options={question.options}
          correctOption={question.correctOption}
          onOptionPress={handleOptionPress}
          onNextQuestion={handleNextQuestion}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  flexGrow: {
    flex: 1,
  },
});
