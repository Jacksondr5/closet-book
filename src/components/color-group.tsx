"use client";

import * as React from "react";
import {
  type ColorOption,
  jacketColors,
  shirtColors,
  trouserColors,
  shoeColors,
  type ColorCategory,
} from "./colors";
import { type GarmentType } from "~/server/db/schema";
import {
  ToggleGroup,
  ToggleGroupItem,
  type CombinedToggleGroupProps,
} from "./ui/toggle-group";

export type ColorGroupProps = CombinedToggleGroupProps & {
  garmentType: GarmentType;
};

const getColorsForType = (type: GarmentType): ColorOption[] => {
  switch (type) {
    case "jacket":
    case "suit":
    case "tie":
    case "pocket_square":
      return jacketColors;
    case "shirt":
      return shirtColors;
    case "trousers":
      return trouserColors;
    case "shoe":
      return shoeColors;
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Invalid garment type: ${type}`);
  }
};

const ColorItems = ({ colors }: { colors: ColorOption[] }) => {
  const groups = colors.reduce(
    (acc, color) => {
      if (!acc[color.category]) {
        acc[color.category] = [];
      }
      acc[color.category].push(color);
      return acc;
    },
    {} as Record<ColorCategory, ColorOption[]>,
  );
  return Object.entries(groups).map(([category, colors]) => (
    <div key={category}>
      <p>{category}</p>
      {colors.map((color) => (
        <ToggleGroupItem
          key={color.name}
          value={color.name}
          style={{ backgroundColor: color.value, color: color.textColor }}
        >
          {color.name}
        </ToggleGroupItem>
      ))}
    </div>
  ));
};

export function ColorGroup({
  garmentType,
  type,
  value,
  onValueChange,
}: ColorGroupProps) {
  const colors = getColorsForType(garmentType);
  // const categories = [...new Set(colors.map((color) => color.category))];
  const colorItems = <ColorItems colors={colors} />;

  if (type === "single") {
    return (
      <ToggleGroup
        type={type}
        onValueChange={onValueChange}
        value={value}
        items={colorItems}
        className="flex flex-col gap-2"
      />
    );
  }
  return (
    <ToggleGroup
      type={type}
      onValueChange={onValueChange}
      value={value}
      items={colorItems}
    />
  );
}
