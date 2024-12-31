export const colorCategories = ["Neutrals", "Warms", "Cools", "Other"] as const;
export type ColorCategory = (typeof colorCategories)[number];

export type ColorOption = {
  category: ColorCategory;
  name: string;
  value: string;
  textColor: string;
};

export const allColors = {
  // Neutrals
  white: {
    category: "Neutrals",
    name: "White",
    value: "#FFFFFF",
    textColor: "#000000",
  },
  lightGrey: {
    category: "Neutrals",
    name: "Light Grey",
    value: "#D3D3D3",
    textColor: "#000000",
  },
  midGrey: {
    category: "Neutrals",
    name: "Mid Grey",
    value: "#808080",
    textColor: "#000000",
  },
  darkGrey: {
    category: "Neutrals",
    name: "Dark Grey",
    value: "#404040",
    textColor: "#FFFFFF",
  },
  charcoal: {
    category: "Neutrals",
    name: "Charcoal",
    value: "#36454F",
    textColor: "#FFFFFF",
  },
  // Warms
  offWhite: {
    category: "Warms",
    name: "Off White",
    value: "#FAF9F6",
    textColor: "#000000",
  },
  cream: {
    category: "Warms",
    name: "Cream",
    value: "#FFFDD0",
    textColor: "#000000",
  },
  tan: {
    category: "Warms",
    name: "Tan",
    value: "#D2B48C",
    textColor: "#000000",
  },
  camel: {
    category: "Warms",
    name: "Camel",
    value: "#C19A6B",
    textColor: "#000000",
  },
  yellow: {
    category: "Warms",
    name: "Yellow",
    value: "#FFD700",
    textColor: "#000000",
  },
  lightPink: {
    category: "Warms",
    name: "Light Pink",
    value: "#FFB6C1",
    textColor: "#000000",
  },
  darkRed: {
    category: "Warms",
    name: "Dark Red",
    value: "#8B0000",
    textColor: "#FFFFFF",
  },
  burgundy: {
    category: "Warms",
    name: "Burgundy",
    value: "#800020",
    textColor: "#FFFFFF",
  },
  lightBrown: {
    category: "Warms",
    name: "Light Brown",
    value: "#B5651D",
    textColor: "#000000",
  },
  midBrown: {
    category: "Warms",
    name: "Mid Brown",
    value: "#964B00",
    textColor: "#FFFFFF",
  },
  darkBrown: {
    category: "Warms",
    name: "Dark Brown",
    value: "#654321",
    textColor: "#FFFFFF",
  },
  // Cools
  skyBlue: {
    category: "Cools",
    name: "Sky Blue",
    value: "#87CEEB",
    textColor: "#000000",
  },
  lightBlue: {
    category: "Cools",
    name: "Light Blue",
    value: "#ADD8E6",
    textColor: "#000000",
  },
  slate: {
    category: "Cools",
    name: "Slate",
    value: "#708090",
    textColor: "#FFFFFF",
  },
  royalBlue: {
    category: "Cools",
    name: "Royal Blue",
    value: "#4169E1",
    textColor: "#FFFFFF",
  },
  navy: {
    category: "Cools",
    name: "Navy",
    value: "#000080",
    textColor: "#FFFFFF",
  },
  darkNavy: {
    category: "Cools",
    name: "Dark Navy",
    value: "#000033",
    textColor: "#FFFFFF",
  },
  sageGreen: {
    category: "Cools",
    name: "Sage Green",
    value: "#98BA85",
    textColor: "#000000",
  },
  oliveGreen: {
    category: "Cools",
    name: "Olive Green",
    value: "#808000",
    textColor: "#000000",
  },
  forestGreen: {
    category: "Cools",
    name: "Forest Green",
    value: "#228B22",
    textColor: "#FFFFFF",
  },
  lavender: {
    category: "Cools",
    name: "Lavender",
    value: "#E6E6FA",
    textColor: "#000000",
  },
  purple: {
    category: "Cools",
    name: "Purple",
    value: "#800080",
    textColor: "#FFFFFF",
  },
  // Other Colors
  black: {
    category: "Other",
    name: "Black",
    value: "#000000",
    textColor: "#FFFFFF",
  },
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
