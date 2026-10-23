"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="ko"><body style={{ margin: 0, padding: "3rem 1.5rem", fontFamily: "Arial, sans-serif" }}><main role="alert"><h1>화면을 표시할 수 없습니다.</h1><p>잠시 후 다시 시도해 주세요.</p><button type="button" onClick={reset} style={{ minHeight: "2.75rem", padding: "0.5rem 1rem", cursor: "pointer" }}>다시 시도</button></main></body></html>;
}
