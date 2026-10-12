import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "Components/Checkbox", component: Checkbox, tags: ["autodocs"], args: { id: "story-checkbox" },
  decorators: [(Story) => <div className="flex min-h-11 items-center gap-3"><Story /><Label htmlFor="story-checkbox" className="min-h-11">선택 항목</Label></div>],
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
