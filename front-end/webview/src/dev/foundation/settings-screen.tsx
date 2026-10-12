"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function subscribe(onChange: () => void) {
  window.addEventListener("lounge-theme-change", onChange);
  return () => window.removeEventListener("lounge-theme-change", onChange);
}

function setDark(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  window.dispatchEvent(new Event("lounge-theme-change"));
}

export function SettingsScreen() {
  const dark = useSyncExternalStore(subscribe, () => document.documentElement.classList.contains("dark"), () => false);
  return <div className="space-y-7 pb-8"><div className="space-y-3"><p className="text-xs font-semibold tracking-widest text-muted-foreground">DISPLAY SETTINGS</p><h1 className="text-3xl font-bold">표시 설정</h1><p className="text-sm leading-6 text-muted-foreground">기본 색상 모드를 바꾸고 글자와 입력 영역을 비교해 보세요.</p></div><Card><CardHeader><CardTitle>색상 모드</CardTitle></CardHeader><CardContent className="space-y-5"><div role="group" aria-label="색상 모드" className="flex flex-wrap gap-3"><Button variant={!dark ? "default" : "outline"} aria-pressed={!dark} onClick={() => setDark(false)}><Sun size={18} aria-hidden="true" />밝게</Button><Button variant={dark ? "default" : "outline"} aria-pressed={dark} onClick={() => setDark(true)}><Moon size={18} aria-hidden="true" />어둡게</Button></div><p className="text-sm leading-6 text-muted-foreground">선택은 현재 열린 화면에만 적용됩니다. 앱의 설정 저장이나 기기 테마 연동은 포함하지 않습니다.</p></CardContent></Card></div>;
}
