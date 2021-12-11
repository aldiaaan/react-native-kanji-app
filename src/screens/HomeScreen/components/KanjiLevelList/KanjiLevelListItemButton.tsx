import React, {memo} from 'react';
import {Text, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useTheme} from '../../../../components/ThemeProvider';
import {AppTheme} from '../../../../constants/theme';

export type KanjiLevelItemButtonProps = {
  label?: string;
  onPress?: () => void;

  style?: StyleProp<ViewStyle>;
};

export const KanjiLevelListItemButton = memo(
  ({label, onPress = () => {}, style}: KanjiLevelItemButtonProps) => {
    const {theme} = useTheme<AppTheme>();

    return (
      <View
        style={[
          style,
          styles.container,
          {
            borderRadius: theme.roundness.lg ?? 8,
            borderColor: theme.colors.shadow ?? '#000',
          },
        ]}>
        <RectButton
          rippleColor={theme.colors.ripple}
          onPress={onPress}
          style={[
            {
              backgroundColor: theme.colors.gray[300],
              paddingHorizontal: theme.spacing.md,
              paddingVertical: theme.spacing.md,
            },
          ]}>
          <View>
            <Text
              style={[
                styles.label,
                {
                  color: theme.colors.textSecondary,
                  fontFamily: theme.font.medium,
                },
              ]}>
              {label}
            </Text>
          </View>
        </RectButton>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  label: {
    fontSize: 16,
    letterSpacing: -0.2,
  },
});
