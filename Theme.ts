import { Appearance } from "react-native";
import { createContext } from "react";

const colorScheme = Appearance.getColorScheme();

export interface ThemeContext {
  primary: string;
  primaryMuted: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  background: string;
  foreground: string;
  foregroundMuted: string;
  backgroundMuted: string;
  border: string;
  accent: string;
  accentForeground: string;
  destructive: string;
}

export const ThemeLight: ThemeContext = {
  primary: "#2A4454",
  primaryMuted: "#007272",
  primaryForeground: "#FFFFFF",
  secondary: "#007272",
  secondaryForeground: "#FFFFFF",
  background: "#FFFFFF",
  foreground: "#000000",
  foregroundMuted: "#5C5C5C",
  backgroundMuted: "#7AB9BD",
  border: "#F0F0F0",
  accent: "#F5D367",
  accentForeground: "#FFFFFF",
  destructive: "#C66D67",
};

export const ThemeDark: ThemeContext = {
  primary: "#2A4454",
  primaryMuted: "#007272",
  primaryForeground: "#FFFFFF",
  secondary: "#007272",
  secondaryForeground: "#FFFFFF",
  background: "#FFFFFF",
  foreground: "#000000",
  foregroundMuted: "#5C5C5C",
  backgroundMuted: "#7AB9BD",
  border: "#F0F0F0",
  accent: "#F5D367",
  accentForeground: "#FFFFFF",
  destructive: "#C66D67",
};

let DefaultAppTheme = ThemeLight;

if (colorScheme == "dark") {
  DefaultAppTheme = ThemeDark;
}

export interface AppThemeContextInterface {
  theme: ThemeContext;
  setTheme: any;
}

export default DefaultAppTheme;

const defaultAppThemeContext: AppThemeContextInterface = {
  theme: DefaultAppTheme,
  setTheme: () => {},
};

export const AppThemeContext = createContext(defaultAppThemeContext);
