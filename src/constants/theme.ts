import {palette} from './palette';

export const lightTheme = {
  colors: {
    primary: palette.blue,
    secondary: palette.cyan,
    textPrimary: palette.gray[900],
    textPrimaryInverted: palette.gray[100],
    textSecondary: palette.gray[800],
    textTertiary: palette.gray[700],
    background: palette.white,
    backgroundSubdued: palette.gray[200],
    shadow: palette.gray[400],
    green: palette.green,
    gray: palette.gray,
    ripple: 'rgba(0,0,0,0.05)',
    success: palette.green,
    successSubdued: palette.greenSecondary,
    danger: palette.red,
    dangerSubdued: palette.redSecondary,
  },
  font: {
    regular: 'Rubik-Regular',
    semibold: 'Rubik-SemiBold',
    medium: 'Rubik-Medium',
  },
  roundness: {
    sm: 2,
    normal: 4,
    md: 6,
    lg: 8,
    xl: 12,
    xxl: 16,
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },
};

export type AppTheme = typeof lightTheme;
