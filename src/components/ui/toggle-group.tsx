"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import { toggleVariants } from "~/components/ui/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

export type SingleToggleGroupProps = {
  type: "single";
  onValueChange: (value: string) => void;
  value: string;
};

export type MultipleToggleGroupProps = {
  type: "multiple";
  onValueChange: (value: string[]) => void;
  value: string[];
};

export type CombinedToggleGroupProps = (
  | SingleToggleGroupProps
  | MultipleToggleGroupProps
) & {
  className?: string;
};

export type ToggleGroupProps = CombinedToggleGroupProps & {
  items: React.ReactNode;
};

const ToggleGroup = ({
  type,
  onValueChange,
  value,
  items,
  ...props
}: ToggleGroupProps) => {
  // For some reason, type inference isn't working, so we need to help
  // the compiler out.
  if (type === "single") {
    return (
      <ToggleGroupImpl
        type={type}
        onValueChange={onValueChange}
        value={value}
        {...props}
      >
        {items}
      </ToggleGroupImpl>
    );
  }

  return (
    <ToggleGroupImpl
      type={type}
      onValueChange={onValueChange}
      value={value}
      {...props}
    >
      {items}
    </ToggleGroupImpl>
  );
};

ToggleGroup.displayName = "ToggleGroup";

const ToggleGroupImpl = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroupImpl.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        "rounded-none first:rounded-l-md last:rounded-r-md",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
