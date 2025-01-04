import { type Meta, type StoryObj } from "@storybook/react";
import { Icons } from "./Icons";

// We don't really need the `component` prop since this is just a
// set of stories to make sure different icons look right
const meta = {
  title: "Icons",
  component: Icons,
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {};

export const Colored: Story = {
  args: {
    className: "text-red-500",
  },
};

export const WithBackground: Story = {
  args: {
    className: "bg-grass-10",
  },
};
