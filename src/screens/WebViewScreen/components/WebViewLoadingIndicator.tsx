import React, {forwardRef, useImperativeHandle} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useTheme} from '../../../components/ThemeProvider';
import {AppTheme} from '../../../constants/theme';

export type WebViewLoadingIndicatorController = {
  set: (value: number) => void;
  hide: () => void;
  show: () => void;
};

export type WebViewLoadingIndicatorProps = {
  ref?: React.RefObject<WebViewLoadingIndicatorController>;
  color?: string;
};

export const WebViewLoadingIndicator = forwardRef<
  WebViewLoadingIndicatorController,
  WebViewLoadingIndicatorProps
>(({color}, ref) => {
  const progress = useSharedValue(0);
  const isVisible = useSharedValue(1);

  useImperativeHandle(ref, () => ({
    set: (value: number) => {
      progress.value = withSpring(value, {overshootClamping: false});
    },
    show: () => {
      isVisible.value = withSpring(1, {overshootClamping: false});
    },
    hide: () => {
      isVisible.value = withSpring(0, {overshootClamping: false});
    },
  }));

  const progressStyle = useAnimatedStyle(
    () => ({
      right: `${(1 - progress.value) * 100}%`,
    }),
    [],
  );

  const containerStyle = useAnimatedStyle(
    () => ({
      opacity: isVisible.value,
    }),
    [],
  );

  const {theme} = useTheme<AppTheme>();

  return (
    <Animated.View
      style={[
        containerStyle,
        {
          height: 3,
          position: 'relative',
          backgroundColor: theme.colors.shadow,
          overflow: 'hidden',
        },
      ]}>
      <Animated.View
        style={[
          progressStyle,
          {
            backgroundColor: theme.colors.primary,
            ...StyleSheet.absoluteFillObject,
          },
        ]}
      />
    </Animated.View>
  );
});
