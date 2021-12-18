import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';

import {KanjiLevelList} from './components/KanjiLevelList/KanjiLevelList';
import {LEVELS} from './constants';

export const HomeScreen = () => {
  const {theme} = useTheme<AppTheme>();

  return (
    <SafeAreaView
      style={[
        styles.page,
        {
          backgroundColor: theme.colors.background,
        },
      ]}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View
        style={{
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.lg,
        }}>
        <Text
          style={[
            styles.greeting,
            {
              fontFamily: theme.font.semibold,
              color: theme.colors.textPrimary,
            },
          ]}>
          Welcome
        </Text>
      </View>
      <KanjiLevelList
        data={LEVELS}
        contentContainerStyle={{paddingHorizontal: theme.spacing.md}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    letterSpacing: -0.2,
    fontSize: 26,
  },
  page: {
    flex: 1,
  },
});
