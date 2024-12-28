"use client";

import * as React from "react";
import {
  type ColorOption,
  jacketColors,
  shirtColors,
  trouserColors,
  shoeColors,
} from "./colors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type GarmentType = "jacket" | "shirt" | "trousers" | "shoes";

interface ColorSelectProps {
  type: GarmentType;
  value?: string;
  onValueChange?: (value: string) => void;
}

const getColorsForType = (type: GarmentType): ColorOption[] => {
  switch (type) {
    case "jacket":
      return jacketColors;
    case "shirt":
      return shirtColors;
    case "trousers":
      return trouserColors;
    case "shoes":
      return shoeColors;
  }
};

export function ColorSelect({ type, value, onValueChange }: ColorSelectProps) {
  const colors = getColorsForType(type);

  return (
    <Select value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a color" />
      </SelectTrigger>
      <SelectContent>
        {colors.map((color) => (
          <SelectItem
            key={color.value}
            value={color.value}
            className="flex items-center gap-2"
          >
            <div
              className="h-4 w-4 rounded-full border border-slate-200"
              style={{ backgroundColor: color.value }}
            />
            {color.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
