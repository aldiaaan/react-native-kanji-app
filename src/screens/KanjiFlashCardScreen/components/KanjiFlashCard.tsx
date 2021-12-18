import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '../../../components/ThemeProvider';
import {AppTheme} from '../../../constants/theme';

export type KanjiFlashCardProps = {
  kanji?: string;
  meanings?: string[];
  kun?: string[];
};

export type KanjiFlashCardController = {
  flip: () => void;
};

export const KanjiFlashCard = forwardRef<
  KanjiFlashCardController,
  KanjiFlashCardProps
>(({kanji, meanings, kun}, ref) => {
  const [isFlipped, setIsFlipper] = useState(false);

  useImperativeHandle(ref, () => ({
    flip: () => {
      setIsFlipper(prev => !prev);
    },
  }));

  const {theme} = useTheme<AppTheme>();

  return (
    <View
      style={[
        {
          borderColor: theme.colors.shadow,
          borderRadius: theme.roundness.xl,
          borderWidth: 2,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      {isFlipped ? (
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: theme.font.semibold,
              fontSize: 20,
              marginTop: 12,
            }}>
            {meanings?.reduce((acc, val) => {
              acc += `${val}, `;

              return acc;
            }, '')}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: theme.font.semibold,
              fontSize: 20,
              marginTop: 12,
            }}>
            {kun?.reduce((acc, val) => {
              acc += `${val}, `;

              return acc;
            }, '')}
          </Text>
        </View>
      ) : (
        <Text
          style={{
            fontFamily: theme.font.semibold,
            fontSize: 48,
            color: theme.colors.textPrimary,
          }}>
          {kanji}
        </Text>
      )}
    </View>
  );
});
