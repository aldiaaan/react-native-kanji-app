import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {StyleProp, ViewStyle, FlatListProps} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AppStackParamList} from '../../../navigators/AppNavigator';
import {KanjiListItem} from './KanjiListItem';

export type KanjiListPropsItem = {
  kanji?: string;
  meanings?: string[];
};

export type KanjiListProps<T> = {
  data?: KanjiListPropsItem[];
  contentContainerStyle?: StyleProp<ViewStyle>;
} & Omit<FlatListProps<T>, 'renderItem' | 'keyExtractor'>;

export const KanjiList = ({
  data,
  ...rest
}: KanjiListProps<KanjiListPropsItem>) => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const handleKanjiItemPress = useCallback(
    ({kanji}: {kanji?: string}) =>
      navigation.navigate('WebViewScreen', {
        url: `https://jisho.org/search/${kanji}%20%23kanji`,
        title: `${kanji} details`,
      }),
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: KanjiListPropsItem}) => {
      return (
        <KanjiListItem
          kanji={item.kanji}
          meaning={item.meanings?.[0]}
          onPress={handleKanjiItemPress}
        />
      );
    },
    [handleKanjiItemPress],
  );

  const keyExtractor = useCallback(item => item.kanji, []);

  return (
    <FlatList
      {...rest}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
