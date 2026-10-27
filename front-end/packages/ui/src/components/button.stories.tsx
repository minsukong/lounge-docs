import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const;
const sizes = ["xs", "sm", "default", "lg"] as const;
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;
const meta = { title: "Components/Button", component: Button, tags: ["autodocs"], args: { children: "확인" } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline", children: "취소" } };
export const Disabled: Story = { args: { disabled: true, children: "처리 중" } };
export const Variants: Story = {
  render: () => <div className="flex flex-wrap gap-3">{variants.map((variant) => <Button key={variant} variant={variant}>{variant}</Button>)}</div>,
};
export const Sizes: Story = {
  render: () => <div className="flex flex-wrap items-center gap-3">{sizes.map((size) => <Button key={size} size={size}>{size}</Button>)}</div>,
};
export const IconSizes: Story = {
  render: () => <div className="flex items-center gap-3">{iconSizes.map((size) => <Button key={size} size={size} aria-label={`${size} 추가`}>+</Button>)}</div>,
};
