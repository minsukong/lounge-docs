import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SampleForm } from "./sample-form";

const meta = {
  title: "Features/SampleForm", component: SampleForm, tags: ["autodocs"],
  decorators: [(Story) => <div className="max-w-md"><Story /></div>],
} satisfies Meta<typeof SampleForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
