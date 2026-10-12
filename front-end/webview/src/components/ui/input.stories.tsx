import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "Components/Input", component: Input, tags: ["autodocs"],
  args: { id: "story-email", type: "email", placeholder: "name@example.com" },
  decorators: [(Story) => <div className="max-w-sm space-y-2"><Label htmlFor="story-email">이메일</Label><Story /></div>],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true, defaultValue: "review@example.com" } };
export const Invalid: Story = { args: { "aria-invalid": true, "aria-describedby": "story-email-error" }, render: (args) => <><Input {...args} /><p id="story-email-error" className="text-sm text-destructive">올바른 이메일 주소를 입력해 주세요.</p></> };
