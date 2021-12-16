import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useTheme} from '../../../components/ThemeProvider';
import {AppTheme} from '../../../constants/theme';

export type KanjiListItemProps = {
  kanji?: string;
  meaning?: string;
  onPress?: (data: {kanji?: string}) => void;
};

export const KanjiListItem = ({
  onPress,
  kanji,
  meaning,
}: KanjiListItemProps) => {
  const {theme} = useTheme<AppTheme>();

  const handlePress = useCallback(() => {
    onPress?.({kanji});
  }, [onPress, kanji]);

  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          flex: 1,
          height: 108,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          backgroundColor: theme.colors.background,
          borderRadius: theme.roundness.md,
          borderColor: theme.colors.shadow,
          paddingHorizontal: theme.spacing.md,
        }}>
        <Text
          style={{
            fontSize: 26,
            fontFamily: theme.font.semibold,
            color: theme.colors.textPrimary,
          }}>
          {kanji}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: theme.spacing.sm,
            color: theme.colors.textSecondary,
          }}>
          {meaning}
        </Text>
      </View>
    </Pressable>
  );
};
