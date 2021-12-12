import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import Animated from 'react-native-reanimated';

import {useTheme} from '../../../../components/ThemeProvider';
import {KanjiTypes} from '../../../../constants/kanji';
import {AppTheme} from '../../../../constants/theme';

import {
  KanjiQuestionEnteringAnimation,
  KanjiQuestionExitingAnimation,
} from './animations';
import {
  KanjiQuestionOption,
  KanjiQuestionOptionState,
} from './KanjiQuestionOption';
import {KanjiQuizOption} from './types';

export type KanjiQuestionProps = {
  onOptionPress?: (args: {id: string; value: string}) => void;
  onNextQuestion?: () => void;
  options?: KanjiQuizOption[];
  value?: string;
  type: KanjiTypes;
  style?: StyleProp<ViewStyle>;
  id: string;
  kanji?: string;
  correctOption?: KanjiQuizOption;
  label?: string;
};

export const KanjiQuestion = ({
  options,
  id,
  value,
  kanji,
  label,
  style,
  onOptionPress,
  onNextQuestion,
  correctOption,
}: KanjiQuestionProps) => {
  const {theme} = useTheme<AppTheme>();

  return (
    <Animated.View
      style={[style]}
      entering={KanjiQuestionEnteringAnimation}
      exiting={KanjiQuestionExitingAnimation}>
      <Text
        style={[
          styles.label,
          {
            color: theme.colors.textPrimary,
            fontFamily: theme.font.semibold,
            paddingTop: theme.spacing.lg,
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.xl * 2,
          },
        ]}>
        {label}
      </Text>
      <View style={styles.kanjiContainer}>
        <Text
          style={[
            styles.kanji,
            {
              color: theme.colors.textPrimary,
              fontFamily: theme.font.semibold,
            },
          ]}>
          {kanji}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.lg,
        }}>
        {options?.map(option => {
          let state: KanjiQuestionOptionState = 'undetermined';

          if (option.value === value) {
            if (value !== correctOption?.value) {
              state = 'wrong';
            } else {
              state = 'correct';
            }
          } else if (value) {
            if (
              option.value !== correctOption?.value &&
              option.value === value
            ) {
              state = 'wrong';
            }
            if (option.value === correctOption?.value) {
              state = 'correct';
            }
          }

          return (
            <KanjiQuestionOption
              state={state}
              label={option.label}
              key={option.value}
              onPress={() => {
                if (!value) {
                  onOptionPress?.({id, value: option.value});
                  setTimeout(() => {
                    onNextQuestion?.();
                  }, 1000);
                }
              }}
            />
          );
        })}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  question: {},
  label: {lineHeight: 36, letterSpacing: -0.5, fontSize: 24},
  kanji: {fontSize: 82, textAlign: 'center'},
  kanjiContainer: {flex: 1, justifyContent: 'center'},
});
