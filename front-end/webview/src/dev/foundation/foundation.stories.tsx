import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppShell } from "@/dev/app-shell";
import { HomeScreen } from "./home-screen";
import { ComponentsScreen } from "./components-screen";
import { StatesScreen } from "./states-screen";
import { SettingsScreen } from "./settings-screen";

const meta = {
  title: "Screens/Foundation", component: HomeScreen,
  parameters: { layout: "fullscreen", nextjs: { navigation: { pathname: "/preview" } } },
  decorators: [(Story) => <AppShell><Story /></AppShell>],
} satisfies Meta<typeof HomeScreen>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
export const NarrowMobile: Story = { globals: { viewport: { value: "narrow", isRotated: false } } };
export const Components: Story = { render: () => <ComponentsScreen />, parameters: { nextjs: { navigation: { pathname: "/preview/components" } } } };
export const States: Story = { render: () => <StatesScreen />, parameters: { nextjs: { navigation: { pathname: "/preview/states" } } } };
export const Settings: Story = { render: () => <SettingsScreen />, parameters: { nextjs: { navigation: { pathname: "/preview/settings" } } } };
