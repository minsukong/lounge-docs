import type { Metadata } from "next";
import { SettingsScreen } from "@/dev/foundation/settings-screen";

export const metadata: Metadata = { title: "표시 설정" };
export default function SettingsPage() { return <SettingsScreen />; }
