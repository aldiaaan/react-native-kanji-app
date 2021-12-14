import React, {memo, useCallback, useState} from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {mix, useTiming} from 'react-native-redash';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {useTheme} from '../../../../components/ThemeProvider';
import {AppTheme} from '../../../../constants/theme';

import {KanjiLevelListItemButton} from './KanjiLevelListItemButton';

type KanjiLevelListItemProps = {
  label?: string;
  type?: string;
  onFlashCardPress?: () => void;
  onExplorePress?: () => void;
  onQuizPress?: () => void;
};

const EXPANDED_HEIGHT = 220;

export const KanjiLevelListItem = memo(
  ({
    label,
    onExplorePress,
    onFlashCardPress,
    onQuizPress,
  }: KanjiLevelListItemProps) => {
    const {theme} = useTheme<AppTheme>();

    const [isVisible, setIsVisible] = useState(false);

    const transition = useTiming(isVisible);

    const animatedContainerStyle = useAnimatedStyle(() => ({
      height: interpolate(transition.value, [0, 1], [80, EXPANDED_HEIGHT + 80]),
    }));

    const animatedChevronStyle = useAnimatedStyle(() => ({
      // transform: [{rotate: `${mix(transition.value, -180, 0)}deg`}],
      // transform: [{}],
    }));

    const handlePress = useCallback(() => {
      setIsVisible(prev => !prev);
    }, [setIsVisible]);

    const handleQuizPress = useCallback(() => {
      onQuizPress?.();
    }, [onQuizPress]);

    const handleFlashCardPress = useCallback(() => {
      onFlashCardPress?.();
    }, [onFlashCardPress]);

    const handleExplorePress = useCallback(() => {
      onExplorePress?.();
    }, [onExplorePress]);

    return (
      <Animated.View
        style={[
          styles.container,
          animatedContainerStyle,
          {borderRadius: theme.roundness.xl ?? 12},
        ]}>
        <Pressable onPress={handlePress}>
          <View
            style={[
              styles.handle,
              {
                padding: theme.spacing.md,
                backgroundColor: theme.colors.background,
                borderRadius: theme.roundness.xl,
                borderColor: theme.colors.shadow,
              },
            ]}>
            <View style={styles.flexGrow}>
              <Text
                style={[
                  styles.handleLabel,
                  {
                    fontFamily: theme.font.medium,
                  },
                ]}>
                {label}
              </Text>
            </View>
            <Animated.View style={[animatedChevronStyle, styles.centerText]}>
              <FeatherIcon name="chevron-down" size={26} />
            </Animated.View>
          </View>
        </Pressable>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              borderRadius: theme.roundness.xl ?? 12,
              paddingTop: 80 + theme.spacing.md ?? 8,
              paddingLeft: theme.spacing.md ?? 8,
              paddingRight: theme.spacing.md ?? 8,
              paddingBottom: theme.spacing.md ?? 8,
              borderColor: theme.colors.shadow ?? '#000',
            },
          ]}>
          <KanjiLevelListItemButton
            label="Flash Card"
            style={styles.buttonsGutter}
            onPress={handleFlashCardPress}
          />
          <KanjiLevelListItemButton
            onPress={handleQuizPress}
            label="Quiz"
            style={styles.buttonsGutter}
          />
          <KanjiLevelListItemButton
            label="Kanji List"
            onPress={handleExplorePress}
            style={styles.buttonsGutter}
          />
        </Animated.View>
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  handle: {
    height: 80,
    borderWidth: 2,
    flexDirection: 'row',
  },
  flexGrow: {
    flex: 1,
  },
  handleLabel: {
    fontSize: 20,
  },
  centerText: {
    justifyContent: 'center',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,

    left: 0,
    right: 0,
    borderWidth: 2,
    minHeight: 80 + EXPANDED_HEIGHT,
    zIndex: -1,
  },
  buttonsGutter: {
    marginBottom: 8,
  },
});
