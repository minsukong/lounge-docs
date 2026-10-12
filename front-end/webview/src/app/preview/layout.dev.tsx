import type { Metadata } from "next";
import { AppShell } from "@/dev/app-shell";
import "@/dev/preview.css";

export const metadata: Metadata = {
  title: "더라운지 · 공통 기반 검수",
  description: "개발 모드에서 사용하는 Phase 0 검수 화면",
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
