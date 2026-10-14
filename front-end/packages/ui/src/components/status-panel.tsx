import { CircleAlert, Inbox, WifiOff } from "lucide-react";
import { Button } from "./button";
import { Skeleton } from "./skeleton";

export type ScreenStatus = "loading" | "empty" | "error" | "offline";

export function StatusPanel({ status, onRetry }: { status: ScreenStatus; onRetry?: () => void }) {
  if (status === "loading") {
    return <div role="status" aria-label="내용을 불러오는 중" className="space-y-4 py-6"><div aria-hidden="true" className="space-y-4"><Skeleton className="h-5 w-2/3" /><Skeleton className="h-4 w-1/3" />{[1, 2, 3].map((key) => <Skeleton key={key} className="h-20 w-full" />)}</div><p className="text-center text-sm text-muted-foreground">내용을 불러오고 있습니다.</p></div>;
  }
  const content = {
    empty: { icon: Inbox, title: "아직 표시할 내용이 없습니다.", description: "내용이 준비되면 이곳에서 확인할 수 있습니다." },
    error: { icon: CircleAlert, title: "내용을 불러오지 못했습니다.", description: "잠시 후 다시 시도해 주세요." },
    offline: { icon: WifiOff, title: "인터넷 연결을 확인해 주세요.", description: "네트워크에 연결한 뒤 다시 시도할 수 있습니다." },
  }[status];
  const Icon = content.icon;
  return <section role={status === "error" ? "alert" : "status"} className="flex min-h-72 flex-col items-center justify-center gap-4 px-4 py-10 text-center"><div className="rounded-full bg-secondary p-4"><Icon size={28} strokeWidth={1.5} aria-hidden="true" /></div><div className="space-y-2"><h2 className="text-lg font-semibold">{content.title}</h2><p className="text-sm leading-6 text-muted-foreground">{content.description}</p></div>{status !== "empty" && onRetry && <Button variant="outline" onClick={onRetry}>다시 시도</Button>}</section>;
}
