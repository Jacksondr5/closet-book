// A component that lets the user select seasons (multiple allowed)

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type SingleSeasonGroupProps = {
  type: "single";
  onValueChange: (value: string) => void;
  value: string;
};

type MultipleSeasonGroupProps = {
  type: "multiple";
  onValueChange: (value: string[]) => void;
  value: string[];
};

export type SeasonGroupProps =
  | SingleSeasonGroupProps
  | MultipleSeasonGroupProps;

const seasonItems = (
  <>
    <ToggleGroupItem value="spring" aria-label="Spring">
      🌸
    </ToggleGroupItem>
    <ToggleGroupItem value="summer" aria-label="Summer">
      ☀️
    </ToggleGroupItem>
    <ToggleGroupItem value="fall" aria-label="Fall">
      🍁
    </ToggleGroupItem>
    <ToggleGroupItem value="winter" aria-label="Winter">
      ❄️
    </ToggleGroupItem>
  </>
);

export function SeasonGroup({ type, onValueChange, value }: SeasonGroupProps) {
  // For some reason, type inference isn't working, so we need to help
  // the compiler out.
  if (type === "single") {
    return (
      <ToggleGroup type={type} onValueChange={onValueChange} value={value}>
        {seasonItems}
      </ToggleGroup>
    );
  }

  return (
    <ToggleGroup type={type} onValueChange={onValueChange} value={value}>
      {seasonItems}
    </ToggleGroup>
  );
}
