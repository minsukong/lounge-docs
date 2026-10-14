"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../components/button";

function subscribe(onChange: () => void) {
  window.addEventListener("lounge-theme-change", onChange);
  return () => window.removeEventListener("lounge-theme-change", onChange);
}

export function setPreviewDark(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  window.dispatchEvent(new Event("lounge-theme-change"));
}

export function usePreviewTheme() {
  return useSyncExternalStore(subscribe, () => document.documentElement.classList.contains("dark"), () => false);
}

export function PreviewThemeToggle() {
  const dark = usePreviewTheme();
  return <Button variant="outline" aria-label="다크 모드" aria-pressed={dark} onClick={() => setPreviewDark(!dark)}>{dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}{dark ? "라이트 모드" : "다크 모드"}</Button>;
}
