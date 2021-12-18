import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {useTheme} from '../../../components/ThemeProvider';
import {AppTheme} from '../../../constants/theme';

import {KanjiFlashCard, KanjiFlashCardController} from './KanjiFlashCard';

export type KanjiFlashCardsProps = {
  kanjis?: {
    kanji: string;
    meanings: string[];
    kun: string[];
  }[];
  currentIndex: number;
  style?: StyleProp<ViewStyle>;
};

export type KanjiFlashCardsController = {
  flipCurrentCard: () => void;
};

export const KanjiFlashCards = forwardRef<
  KanjiFlashCardsController,
  KanjiFlashCardsProps
>(({kanjis = [], currentIndex, style}, ref) => {
  const {theme} = useTheme<AppTheme>();

  const currentCardRef = useRef<KanjiFlashCardController>(null as any);

  useImperativeHandle(ref, () => ({
    flipCurrentCard: () => {
      currentCardRef.current?.flip();
    },
  }));

  return (
    <View
      style={[
        {
          width: 420,
          height: 500,
        },
        style,
      ]}>
      <KanjiFlashCard
        kanji={kanjis[currentIndex].kanji}
        key={kanjis[currentIndex].kanji}
        meanings={kanjis[currentIndex].meanings}
        kun={kanjis[currentIndex].kun}
        ref={currentCardRef}
      />
    </View>
  );
});
