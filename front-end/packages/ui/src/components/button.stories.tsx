import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta = { title: "Components/Button", component: Button, tags: ["autodocs"], args: { children: "확인" } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline", children: "취소" } };
export const Disabled: Story = { args: { disabled: true, children: "처리 중" } };
