import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {KanjiLevelListItem} from './KanjiLevelListItem';

import {AppStackParamList} from '../../../../navigators/AppNavigator';
import {KanjiGradeLevel} from '../../../../constants/kanji';

export type KanjiLevelListProps = {
  data: {type: string; label: string}[];
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const KanjiLevelList = memo(
  ({data, contentContainerStyle}: KanjiLevelListProps) => {
    const keyExtractor = useCallback((item: typeof data[0]) => item.type, []);

    const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

    const renderItem = useCallback(
      ({item}: {item: typeof data[0]}) => (
        <View style={styles.itemsGutter}>
          <KanjiLevelListItem
            label={item.label}
            type={item.type}
            onExplorePress={() => {
              navigation.navigate('KanjiListLoaderScreen', {
                level: item.type as KanjiGradeLevel,
              });
            }}
            onFlashCardPress={() => {
              navigation.navigate('KanjiFlashCardLoaderScreen', {
                level: item.type as KanjiGradeLevel,
              });
            }}
            onQuizPress={() => {
              navigation.navigate('QuizLoaderScreen', {
                level: item.type as KanjiGradeLevel,
              });
            }}
          />
        </View>
      ),
      [navigation],
    );

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={contentContainerStyle}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  },
);

const styles = StyleSheet.create({
  itemsGutter: {
    marginBottom: 16,
  },
});
