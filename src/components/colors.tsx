export type ColorOption = {
  name: string;
  value: string;
};

export const allColors = {
  // Neutrals
  white: { name: "White", value: "#FFFFFF" },
  lightGrey: { name: "Light Grey", value: "#D3D3D3" },
  midGrey: { name: "Mid Grey", value: "#808080" },
  darkGrey: { name: "Dark Grey", value: "#404040" },
  charcoal: { name: "Charcoal", value: "#36454F" },
  // Warms
  offWhite: { name: "Off White", value: "#FAF9F6" },
  cream: { name: "Cream", value: "#FFFDD0" },
  tan: { name: "Tan", value: "#D2B48C" },
  camel: { name: "Camel", value: "#C19A6B" },
  yellow: { name: "Yellow", value: "#FFD700" },
  lightPink: { name: "Light Pink", value: "#FFB6C1" },
  darkRed: { name: "Dark Red", value: "#8B0000" },
  burgundy: { name: "Burgundy", value: "#800020" },
  lightBrown: { name: "Light Brown", value: "#B5651D" },
  midBrown: { name: "Mid Brown", value: "#964B00" },
  darkBrown: { name: "Dark Brown", value: "#654321" },
  // Cools
  skyBlue: { name: "Sky Blue", value: "#87CEEB" },
  lightBlue: { name: "Light Blue", value: "#ADD8E6" },
  slate: { name: "Slate", value: "#708090" },
  royalBlue: { name: "Royal Blue", value: "#4169E1" },
  navy: { name: "Navy", value: "#000080" },
  darkNavy: { name: "Dark Navy", value: "#000033" },
  sageGreen: { name: "Sage Green", value: "#98BA85" },
  oliveGreen: { name: "Olive Green", value: "#808000" },
  forestGreen: { name: "Forest Green", value: "#228B22" },
  lavender: { name: "Lavender", value: "#E6E6FA" },
  purple: { name: "Purple", value: "#800080" },
  // Other Colors
  black: { name: "Black", value: "#000000" },
} as const satisfies Record<string, ColorOption>;

export const jacketColors = [
  allColors.lightGrey,
  allColors.midGrey,
  allColors.darkGrey,
  allColors.charcoal,
  allColors.offWhite,
  allColors.cream,
  allColors.tan,
  allColors.camel,
  allColors.yellow,
  allColors.lightPink,
  allColors.burgundy,
  allColors.lightBrown,
  allColors.midBrown,
  allColors.darkBrown,
  allColors.skyBlue,
  allColors.lightBlue,
  allColors.slate,
  allColors.royalBlue,
  allColors.navy,
  allColors.darkNavy,
  allColors.sageGreen,
  allColors.oliveGreen,
  allColors.forestGreen,
  allColors.lavender,
  allColors.purple,
];
export const shirtColors = [
  allColors.white,
  allColors.skyBlue,
  allColors.lightPink,
  allColors.cream,
  allColors.offWhite,
];
export const trouserColors = [
  allColors.white,
  allColors.lightGrey,
  allColors.midGrey,
  allColors.darkGrey,
  allColors.charcoal,
  allColors.offWhite,
  allColors.cream,
  allColors.tan,
  allColors.camel,
  allColors.yellow,
  allColors.lightPink,
  allColors.darkRed,
  allColors.burgundy,
  allColors.lightBrown,
  allColors.midBrown,
  allColors.darkBrown,
  allColors.skyBlue,
  allColors.lightBlue,
  allColors.slate,
  allColors.royalBlue,
  allColors.navy,
  allColors.darkNavy,
  allColors.sageGreen,
  allColors.oliveGreen,
  allColors.forestGreen,
  allColors.purple,
];
export const shoeColors = [allColors.darkBrown, allColors.black];
