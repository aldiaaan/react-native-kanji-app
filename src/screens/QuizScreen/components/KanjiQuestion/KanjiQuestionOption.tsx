import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useTheme} from '../../../../components/ThemeProvider';
import {AppTheme} from '../../../../constants/theme';

export type KanjiQuestionProps = {
  onPress?: () => void;
  state?: KanjiQuestionOptionState;

  label?: string;
  id?: string;
  value?: string;
};

export type KanjiQuestionOptionState = 'correct' | 'wrong' | 'undetermined';

export const KanjiQuestionOption = ({
  label,
  onPress,
  state = 'undetermined',
}: KanjiQuestionProps) => {
  const {theme} = useTheme<AppTheme>();

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: theme.spacing.md,
            borderColor:
              state === 'correct'
                ? theme.colors.success
                : state === 'wrong'
                ? theme.colors.danger
                : theme.colors.shadow,
            borderRadius: theme.roundness.lg ?? 8,
            backgroundColor:
              state === 'correct'
                ? theme.colors.successSubdued
                : state === 'wrong'
                ? theme.colors.dangerSubdued
                : theme.colors.background,
            marginBottom: theme.spacing.sm,
          },
        ]}>
        <Text
          style={[
            styles.label,
            {
              fontFamily: theme.font.medium,
              color: theme.colors.textPrimary,
            },
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  label: {
    fontSize: 15,
  },
});
