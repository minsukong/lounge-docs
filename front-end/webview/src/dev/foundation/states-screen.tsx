"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatusPanel, type ScreenStatus } from "@/components/feedback/status-panel";

const options: { value: ScreenStatus; label: string }[] = [
  { value: "loading", label: "로딩" }, { value: "empty", label: "빈 화면" },
  { value: "error", label: "오류" }, { value: "offline", label: "연결 끊김" },
];

export function StatesScreen() {
  const [status, setStatus] = useState<ScreenStatus>("loading");
  const [message, setMessage] = useState("");
  return <div className="space-y-7 pb-8"><div className="space-y-3"><p className="text-xs font-semibold tracking-widest text-muted-foreground">SCREEN STATES</p><h1 className="text-3xl font-bold">화면 상태</h1><p className="text-sm leading-6 text-muted-foreground">같은 영역이 상황에 따라 어떻게 표시되는지 비교합니다. 상태 선택은 미리보기이며 실제 서버 응답을 재현하지 않습니다.</p></div><div role="group" aria-label="미리볼 화면 상태" className="flex flex-wrap gap-3">{options.map(({ value, label }) => <Button key={value} variant={status === value ? "default" : "outline"} aria-pressed={status === value} onClick={() => { setStatus(value); setMessage(""); }}>{label}</Button>)}</div><Card><CardContent><StatusPanel status={status} onRetry={() => setMessage("다시 시도 버튼의 동작을 확인했습니다. 네트워크 요청은 하지 않았습니다.")} /></CardContent></Card><p role="status" className="min-h-6 text-sm leading-6 text-muted-foreground">{message}</p></div>;
}
