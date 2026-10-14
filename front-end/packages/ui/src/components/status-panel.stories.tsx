import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StatusPanel } from "./status-panel";

const meta = { title: "Components/StatusPanel", component: StatusPanel, tags: ["autodocs"], args: { status: "loading" } } satisfies Meta<typeof StatusPanel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Loading: Story = {};
export const Empty: Story = { args: { status: "empty" } };
export const Error: Story = { args: { status: "error" } };
export const Offline: Story = { args: { status: "offline" } };
