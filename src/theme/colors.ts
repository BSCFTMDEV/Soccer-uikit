import { Colors } from "./types";

export const baseColors = {
  failure: "#fa0684",
  primary: "#b5a3baff",
  primaryBright: "#8c85ce",
  primaryDark: "#a7a3baff",
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
  input: "#71B4FF",
  tertiary: "#f1f6f7",
  text: "#0a0a0a",
  textDisabled: "#BDC2C4",
  textSubtle: "#09b2f5ad",
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
  background: "#0000087c",
  backgroundDisabled: "#96c5fa",
  contrast: "#FFFFFF",
  invertedContrast: "#070707f3",
  input: "#0058a1f6",
  primaryDark: "#96a100d8",
  tertiary: "#b5a3ba1a",
  text: "#0a0a0a",
  textDisabled: "#cccccc7e",
  textSubtle: "#71b3fff1",
  borderColor: "#09b2f5ff",
  card: "#a6a3ba00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #71B4FF 0%, #f2f8f79a 100%)",
  },
};
