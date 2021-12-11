import React, {memo, useCallback} from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {KanjiLevelListItem} from '.';

export type KanjiLevelListProps = {
  data: {type: string; label: string}[];
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const KanjiLevelList = memo(
  ({data, contentContainerStyle}: KanjiLevelListProps) => {
    const keyExtractor = useCallback((item: typeof data[0]) => item.type, []);

    const renderItem = useCallback(
      ({item}: {item: typeof data[0]}) => (
        <View style={styles.itemsGutter}>
          <KanjiLevelListItem label={item.label} type={item.type} />
        </View>
      ),
      [],
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
