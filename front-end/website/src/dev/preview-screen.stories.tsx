import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WebsitePreview } from "./preview-screen";

const meta = { title: "Screens/WebsitePreview", component: WebsitePreview, parameters: { layout: "fullscreen" } } satisfies Meta<typeof WebsitePreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
