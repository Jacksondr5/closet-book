import { oliveDark } from "@radix-ui/colors";

export const colorCategories = ["Neutrals", "Warms", "Cools", "Other"] as const;
export type ColorCategory = (typeof colorCategories)[number];

export type ColorOption = {
  category: ColorCategory;
  name: string;
  value: string;
  textColor: string;
};

const darkText = oliveDark.olive1;
const lightText = oliveDark.olive12;

export const allColors = {
  // Neutrals
  white: {
    category: "Neutrals",
    name: "White",
    value: "#FFFFFF",
    textColor: darkText,
  },
  lightGrey: {
    category: "Neutrals",
    name: "Light Grey",
    value: "#D3D3D3",
    textColor: darkText,
  },
  midGrey: {
    category: "Neutrals",
    name: "Mid Grey",
    value: "#808080",
    textColor: darkText,
  },
  darkGrey: {
    category: "Neutrals",
    name: "Dark Grey",
    value: "#404040",
    textColor: lightText,
  },
  charcoal: {
    category: "Neutrals",
    name: "Charcoal",
    value: "#36454F",
    textColor: lightText,
  },
  // Warms
  offWhite: {
    category: "Warms",
    name: "Off White",
    value: "#FAF9F6",
    textColor: darkText,
  },
  cream: {
    category: "Warms",
    name: "Cream",
    value: "#FFFDD0",
    textColor: darkText,
  },
  tan: {
    category: "Warms",
    name: "Tan",
    value: "#D2B48C",
    textColor: darkText,
  },
  camel: {
    category: "Warms",
    name: "Camel",
    value: "#C19A6B",
    textColor: darkText,
  },
  yellow: {
    category: "Warms",
    name: "Yellow",
    value: "#FFD700",
    textColor: darkText,
  },
  lightPink: {
    category: "Warms",
    name: "Light Pink",
    value: "#FFB6C1",
    textColor: darkText,
  },
  darkRed: {
    category: "Warms",
    name: "Dark Red",
    value: "#8B0000",
    textColor: lightText,
  },
  burgundy: {
    category: "Warms",
    name: "Burgundy",
    value: "#800020",
    textColor: lightText,
  },
  lightBrown: {
    category: "Warms",
    name: "Light Brown",
    value: "#B5651D",
    textColor: darkText,
  },
  midBrown: {
    category: "Warms",
    name: "Mid Brown",
    value: "#964B00",
    textColor: lightText,
  },
  darkBrown: {
    category: "Warms",
    name: "Dark Brown",
    value: "#654321",
    textColor: lightText,
  },
  // Cools
  skyBlue: {
    category: "Cools",
    name: "Sky Blue",
    value: "#87CEEB",
    textColor: darkText,
  },
  lightBlue: {
    category: "Cools",
    name: "Light Blue",
    value: "#ADD8E6",
    textColor: darkText,
  },
  slate: {
    category: "Cools",
    name: "Slate",
    value: "#708090",
    textColor: lightText,
  },
  royalBlue: {
    category: "Cools",
    name: "Royal Blue",
    value: "#4169E1",
    textColor: lightText,
  },
  navy: {
    category: "Cools",
    name: "Navy",
    value: "#000080",
    textColor: lightText,
  },
  darkNavy: {
    category: "Cools",
    name: "Dark Navy",
    value: "#000033",
    textColor: lightText,
  },
  sageGreen: {
    category: "Cools",
    name: "Sage Green",
    value: "#98BA85",
    textColor: darkText,
  },
  oliveGreen: {
    category: "Cools",
    name: "Olive Green",
    value: "#808000",
    textColor: darkText,
  },
  forestGreen: {
    category: "Cools",
    name: "Forest Green",
    value: "#228B22",
    textColor: lightText,
  },
  lavender: {
    category: "Cools",
    name: "Lavender",
    value: "#E6E6FA",
    textColor: darkText,
  },
  purple: {
    category: "Cools",
    name: "Purple",
    value: "#800080",
    textColor: lightText,
  },
  // Other Colors
  black: {
    category: "Other",
    name: "Black",
    value: "#000000",
    textColor: lightText,
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
