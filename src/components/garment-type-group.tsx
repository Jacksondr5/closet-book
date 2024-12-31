import {
  type CombinedToggleGroupProps,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Suit } from "~/icons/Suit";
import { Jacket } from "~/icons/Jacket";
import { Trousers } from "~/icons/Trousers";
import { Tie } from "~/icons/Tie";
// import {PocketSquare} from "~/icons/react/PocketSquare";
import { Shirt } from "~/icons/Shirt";
import { OxfordShoe } from "~/icons/OxfordShoe";

const garmentTypeItems = (
  <>
    <ToggleGroupItem value="suit" aria-label="Suit">
      <Suit />
    </ToggleGroupItem>
    <ToggleGroupItem value="jacket" aria-label="Jacket">
      <Jacket />
    </ToggleGroupItem>
    <ToggleGroupItem value="trousers" aria-label="Trousers">
      <Trousers />
    </ToggleGroupItem>
    <ToggleGroupItem value="tie" aria-label="Tie">
      <Tie />
    </ToggleGroupItem>
    <ToggleGroupItem value="pocket_square" aria-label="Pocket Square">
      {/* <PocketSquare /> */}
      Pocket Square
    </ToggleGroupItem>
    <ToggleGroupItem value="shirt" aria-label="Shirt">
      <Shirt />
    </ToggleGroupItem>
    <ToggleGroupItem value="shoe" aria-label="Shoe">
      <OxfordShoe />
    </ToggleGroupItem>
  </>
);

export function GarmentTypeGroup({
  type,
  onValueChange,
  value,
}: CombinedToggleGroupProps) {
  if (type === "single") {
    return (
      <ToggleGroup
        type={type}
        onValueChange={onValueChange}
        value={value}
        items={garmentTypeItems}
      />
    );
  }
  return (
    <ToggleGroup
      type={type}
      onValueChange={onValueChange}
      value={value}
      items={garmentTypeItems}
    />
  );
}
