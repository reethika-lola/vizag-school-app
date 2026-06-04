import { MD3DarkTheme, MD3LightTheme, configureFonts } from "react-native-paper";

import { palette } from "./colors";

const fontConfig = {
  fontFamily: "System"
};

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 4,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3LightTheme.colors,
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.accent,
    background: palette.background,
    surface: palette.background,
    surfaceVariant: palette.surface,
    outline: palette.border,
    onBackground: palette.textPrimary,
    onSurface: palette.textPrimary
  }
};

export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 4,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#7DA2FF",
    secondary: palette.secondary,
    tertiary: palette.accent,
    background: palette.darkBackground,
    surface: palette.darkSurface,
    surfaceVariant: palette.darkCard,
    outline: "#334155",
    onBackground: palette.white,
    onSurface: palette.white
  }
};
