// A component that lets the user select seasons (multiple allowed)

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function SeasonGroup() {
  return (
    <ToggleGroup type="multiple">
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
    </ToggleGroup>
  );
}
