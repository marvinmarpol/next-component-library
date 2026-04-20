import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";
import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";

const MANTINE_SHADES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;

function toMantineColors(): Record<string, MantineColorsTuple> {
  return Object.fromEntries(
    Object.entries(colors).map(([name, shades]) => [
      name,
      MANTINE_SHADES.map(
        (shade) => (shades as Record<number, string>)[shade] ?? "#000000",
      ) as unknown as MantineColorsTuple,
    ]),
  );
}

export const Theme = createTheme({
  autoContrast: true,
  colors: toMantineColors(),
  primaryColor: "brand",
  primaryShade: 7,
  cursorType: "pointer",
  fontFamily: typography.fontFamily,
  fontFamilyMonospace: typography.fontFamilyMono,
  defaultRadius: "md",
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
