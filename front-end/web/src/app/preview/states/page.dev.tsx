import type { Metadata } from "next";
import { StatesScreen } from "@/dev/foundation/states-screen";

export const metadata: Metadata = { title: "화면 상태" };
export default function StatesPage() { return <StatesScreen />; }
