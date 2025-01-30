import { colors } from "./colors";

export const getColorHex = (input: string) => {
  const word = input.toLowerCase().split(" ").join("");
  for (const category of Object.keys(colors)) {
    const colorGroup = colors[category as keyof typeof colors];
    for (const key of Object.keys(colorGroup)) {
      if (key.toLowerCase() === word) {
        return colorGroup[key as keyof typeof colorGroup] as string;
      }
    }
  }
};
