import { Colors } from "./types";

export const baseColors = {
  failure: "#fa0684",
  primary: "#0601077c",
  primaryBright: "#1a1357a4",
  primaryDark: "#a7a3bad0",
  secondary: "#0e373191",
  success: "#2f9c479f",
  warning: "#fc9d05ff",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#010a09",
  invertedContrast: "#FFFFFF",
  input: "#0a0a0a",
  tertiary: "#f1f6f7",
  text: "#0a0a0a",
  textDisabled: "#BDC2C4",
  textSubtle: "#0a0a0a",
  borderColor: "#e9eaeb88",
  card: "#a6a3ba67",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #06e1f5 0%, #44327c 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#09b2f5fa",
  background: "#00000800",
  backgroundDisabled: "#96c5fa",
  contrast: "#ffffffff",
  invertedContrast: "#070707ff",
  input: "#0a0a0a",
  primaryDark: "#0a0a0a",
  tertiary: "#571a6854",
  text: "#0a0a0a",
  textDisabled: "#cccccc7e",
  textSubtle: "#0a0a0a",
  borderColor: "#0a0a0a",
  card: "#a6a3ba00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #06e1f5 0%, #44327c 100%)",
  },
};
