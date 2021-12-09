import {palette} from './palette';

export const lightTheme = {
  colors: {
    primary: palette.blue,
    secondary: palette.cyan,
    textPrimary: palette.gray[900],
    textSecondary: palette.gray[800],
    textTertiary: palette.gray[700],
    background: palette.white,
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
