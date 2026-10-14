import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta = {
  title: "Components/Textarea", component: Textarea, tags: ["autodocs"], args: { id: "story-note", rows: 4, placeholder: "메모를 입력해 주세요." },
  decorators: [(Story) => <div className="max-w-sm space-y-2"><Label htmlFor="story-note">메모</Label><Story /></div>],
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
