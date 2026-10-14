"use client";

import { Button } from "@lounge/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section role="alert" className="space-y-4 py-16 text-center"><h1 className="text-2xl font-bold">화면을 불러오지 못했습니다.</h1><p className="text-sm text-muted-foreground">잠시 후 다시 시도해 주세요.</p><Button onClick={reset}>다시 시도</Button></section>;
}
