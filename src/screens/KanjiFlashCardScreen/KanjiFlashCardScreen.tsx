import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {AppStackParamList} from '../../navigators/AppNavigator';
import {
  KanjiFlashCards,
  KanjiFlashCardsController,
} from './components/KanjiFlashCards';

export const KanjiFlashCardScreen = () => {
  const {params} =
    useRoute<RouteProp<AppStackParamList, 'KanjiFlashCardScreen'>>();

  const {theme} = useTheme<AppTheme>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cardRef = useRef<KanjiFlashCardsController>(null as any);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <KanjiFlashCards
        style={{
          width: Dimensions.get('window').width - 64,
        }}
        kanjis={params.kanjis}
        currentIndex={currentIndex}
        ref={cardRef}
      />
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <RectButton
          style={{
            padding: 16,
          }}
          onPress={() => {
            setCurrentIndex(prev => {
              if (prev !== 0) {
                return prev - 1;
              }
              return prev;
            });
          }}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.font.regular,
              fontSize: 16,
            }}>
            Previous
          </Text>
        </RectButton>
        <RectButton
          style={{padding: 16}}
          onPress={() => {
            cardRef.current?.flipCurrentCard();
          }}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.font.regular,
              fontSize: 16,
            }}>
            Flip
          </Text>
        </RectButton>
        <RectButton
          style={{padding: 16}}
          onPress={() => {
            setCurrentIndex(prev => {
              if (prev !== params.kanjis.length - 1) {
                return prev + 1;
              }
              return prev;
            });
          }}>
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontFamily: theme.font.regular,
              fontSize: 16,
            }}>
            Next
          </Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};
