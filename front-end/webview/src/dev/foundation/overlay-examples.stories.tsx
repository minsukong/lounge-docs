import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OverlayExamples } from "./overlay-examples";

const meta = { title: "Features/Overlays", component: OverlayExamples, tags: ["autodocs"] } satisfies Meta<typeof OverlayExamples>;
export default meta;
type Story = StoryObj<typeof meta>;
export const DialogAndSheet: Story = {};
