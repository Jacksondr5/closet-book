import {
  type CombinedToggleGroupProps,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

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

export function SeasonGroup({
  type,
  onValueChange,
  value,
}: CombinedToggleGroupProps) {
  // For some reason, type inference isn't working, so we need to help
  // the compiler out.
  if (type === "single") {
    return (
      <ToggleGroup
        type={type}
        onValueChange={onValueChange}
        value={value}
        items={seasonItems}
      />
    );
  }

  return (
    <ToggleGroup
      type={type}
      onValueChange={onValueChange}
      value={value}
      items={seasonItems}
    />
  );
}
