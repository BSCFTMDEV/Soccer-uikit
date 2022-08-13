import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#0f5f5446",
  primaryBright: "#0bf5d6",
  primaryDark: "#100f5f",
  secondary: "#0940f5",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#c7d1d0",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e3359ff",
  borderColor: "#E9EAEB",
  card: "#ffffff00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1b0f5f 0%, #0e3731 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0478fcff",
  background: "#110433ff",
  backgroundDisabled: "#28a39313",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#f9fdfd",
  primaryDark: "#2a182c",
  tertiary: "#10042b",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#1c1d1fff",
  borderColor: "#28a392",
  card: "#a6a3ba00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1b0f5f 0%, #0e3731 100%)",
  },
};
