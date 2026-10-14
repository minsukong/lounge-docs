import { Badge } from "@lounge/ui/badge";
import { FoundationPreview } from "@lounge/ui/preview";
import { PreviewThemeToggle } from "@lounge/ui/preview/theme";

export function WebsitePreview() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <p className="text-sm font-bold tracking-widest">THE LOUNGE</p>
          <div className="flex items-center gap-3"><Badge variant="outline">홈페이지 기반 검수</Badge><PreviewThemeToggle /></div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14"><FoundationPreview /></main>
      <footer className="mx-auto max-w-6xl px-5 pb-10 text-xs leading-6 text-muted-foreground sm:px-8">공통 기반 검수용 화면입니다. 색상과 폰트는 임시 기본값이며 실제 업무 기능은 포함하지 않습니다.</footer>
    </div>
  );
}
