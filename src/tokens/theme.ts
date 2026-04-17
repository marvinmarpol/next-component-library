import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

const Blue: MantineColorsTuple = [
  colors['-blue-50'],
  colors['-blue-100'],
  colors['-blue-200'],
  colors['-blue-300'],
  colors['-blue-400'],
  colors['-blue-500'],
  colors['-blue-600'],
  colors['-blue-700'],
  colors['-blue-800'],
  colors['-blue-900'],
];

export const Theme = createTheme({
  colors: { Blue },
  primaryColor: 'Blue',
  fontFamily: typography.fontFamily,
  fontFamilyMonospace: typography.fontFamilyMono,
  defaultRadius: 'md',
  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
  },
  fontSizes: {
    xs: typography.fontSizes.xs,
    sm: typography.fontSizes.sm,
    md: typography.fontSizes.base,
    lg: typography.fontSizes.lg,
    xl: typography.fontSizes.xl,
  },
});
