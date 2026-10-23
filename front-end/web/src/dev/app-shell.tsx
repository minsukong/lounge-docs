"use client";

import { PreviewThemeToggle } from "@lounge/ui/preview/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, House, Layers3, Settings2, Signal, WifiOff } from "lucide-react";
import { cn } from "@lounge/ui/utils";
import { useOnline } from "@/lib/use-online";

const navigation = [
  { href: "/preview", label: "둘러보기", icon: House },
  { href: "/preview/components", label: "공통 UI", icon: Layers3 },
  { href: "/preview/states", label: "화면 상태", icon: Signal },
  { href: "/preview/settings", label: "설정", icon: Settings2 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const online = useOnline();
  return (
    <div className="app-shell">
      <a href="#main-content" className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">본문 바로가기</a>
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/preview" className="flex min-h-11 items-center gap-3" aria-label="더라운지 기반 검수 홈">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">L</span>
            <span className="text-sm font-bold tracking-widest">THE LOUNGE</span>
          </Link>
          <div className="flex items-center gap-2"><span className="hidden rounded-full border px-3 py-1 text-xs text-muted-foreground sm:inline-flex">기반 검수</span><PreviewThemeToggle /></div>
        </div>
      </header>
      {!online && <div role="status" className="flex items-center justify-center gap-2 border-b bg-secondary px-5 py-3 text-sm"><WifiOff size={16} aria-hidden="true" />인터넷 연결이 끊겼습니다. 입력 내용은 이 화면에서 유지됩니다.</div>}
      <main id="main-content" tabIndex={-1} className="app-main mx-auto max-w-5xl px-5 pt-8 sm:px-8 sm:pt-12">{children}</main>
      <nav aria-label="검수 화면" className="bottom-nav fixed inset-x-0 bottom-0 z-30 border-t bg-card">
        <div className="mx-auto grid max-w-xl grid-cols-4 gap-2 px-3 py-2">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} aria-current={pathname?.replace(/\/$/, "") === href ? "page" : undefined} className={cn("flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs text-muted-foreground", pathname?.replace(/\/$/, "") === href && "bg-secondary font-semibold text-foreground")}>
              <Icon size={20} aria-hidden="true" />{label}
            </Link>
          ))}
        </div>
      </nav>
      <footer className="mx-auto max-w-5xl px-5 pb-28 text-xs leading-5 text-muted-foreground sm:px-8">공통 구조와 동작을 검수하는 화면입니다. 실제 서비스 화면과 메뉴 구성은 기획 확정 후 적용합니다.<ArrowUpRight size={12} className="ml-1 inline" aria-hidden="true" /></footer>
    </div>
  );
}
