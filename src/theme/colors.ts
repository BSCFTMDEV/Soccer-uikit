import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#06c0f8ff",
  primaryBright: "#0f325ffb",
  primaryDark: "#000208",
  secondary: "#058eff",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#010b44",
  background: "#320242",
  backgroundDisabled: "#285da333",
  contrast: "#FFFFFF",
  invertedContrast: "#160d40",
  input: "#520f5f",
  primaryDark: "#346a6d",
  tertiary: "#06c0f800",
  text: "#150427",
  textDisabled: "#cccccc",
  textSubtle: "#100131",
  borderColor: "#04fddc63",
  card: "#27262c00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #7105ff 0%, #bf0af1 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#010b44",
  background: "#320242",
  backgroundDisabled: "#285da333",
  contrast: "#FFFFFF",
  invertedContrast: "#160d40",
  input: "#520f5f",
  primaryDark: "#346a6d",
  tertiary: "#06c0f800",
  text: "#150427",
  textDisabled: "#cccccc",
  textSubtle: "#100131",
  borderColor: "#04fddc63",
  card: "#27262c00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #7105ff 0%, #bf0af1 100%)",
  },
};
