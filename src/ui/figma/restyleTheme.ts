import tokens from './tokens.json';
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  spacing: {
    s: tokens.Spacing.s,
    m: tokens.Spacing.m,
    l: tokens.Spacing.l,
    xl: tokens.Spacing.xl,
    xxl: tokens.Spacing.xxl
  },
  colors: {
    green: tokens.FigmaColors.green,
    blue: tokens.FigmaColors.blue,
    red: tokens.FigmaColors.red
  },
  textVariants: {
    headlineLarge: {
      fontFamily: tokens.FigmaTexts.headlineLarge.fontFamily,
      fontWeight: tokens.FigmaTexts.headlineLarge.fontWeight,
      fontSize: tokens.FigmaTexts.headlineLarge.fontSize,
      lineHeight: tokens.FigmaTexts.headlineLarge.lineHeight
    },
    description: {
      fontFamily: tokens.FigmaTexts.description.fontFamily,
      fontWeight: tokens.FigmaTexts.description.fontWeight,
      fontSize: tokens.FigmaTexts.description.fontSize,
      lineHeight: tokens.FigmaTexts.description.lineHeight,
      letterSpacing: tokens.FigmaTexts.description.letterSpacing
    },
    logoLarge: {
      fontFamily: tokens.FigmaTexts.logoLarge.fontFamily,
      fontWeight: tokens.FigmaTexts.logoLarge.fontWeight,
      fontSize: tokens.FigmaTexts.logoLarge.fontSize,
      lineHeight: tokens.FigmaTexts.logoLarge.lineHeight,
      letterSpacing: tokens.FigmaTexts.logoLarge.letterSpacing
    }
  }
});

export type Theme = typeof theme;
export default theme;
