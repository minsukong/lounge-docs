import Link from "next/link";
import { ArrowRight, Check, Component, LayoutTemplate, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { number: "01", title: "공통 UI", description: "입력부터 확인과 취소까지. 재사용할 기본 동작을 살펴보세요.", href: "/preview/components", icon: Component },
  { number: "02", title: "화면 상태", description: "로딩, 빈 화면, 오류와 연결 끊김을 각각 확인하세요.", href: "/preview/states", icon: LayoutTemplate },
  { number: "03", title: "표시 설정", description: "밝은 화면과 어두운 화면의 가독성을 비교해 보세요.", href: "/preview/settings", icon: Smartphone },
];

export function HomeScreen() {
  return (
    <div className="space-y-10 pb-8">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">PHASE 0 / FOUNDATION</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">서비스의 시작을<br />단단하게 만듭니다.</h1>
        <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">화면을 채우기 전에, 여러 화면에서 반복되는 구조와 동작을 먼저 확인합니다. 버튼을 눌러 보고, 입력하고, 작은 화면에서도 살펴보세요.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          {["모바일 화면 구조", "키보드와 포커스", "공통 입력 검증"].map((label) => <span key={label} className="flex items-center gap-1.5"><Check size={14} aria-hidden="true" />{label}</span>)}
        </div>
      </section>
      <section aria-label="검수 항목" className="grid gap-4 sm:grid-cols-3">
        {features.map(({ number, title, description, href, icon: Icon }) => (
          <Card key={href} className="h-full">
            <CardContent className="space-y-5 pt-6">
              <div className="flex items-center justify-between text-muted-foreground"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><span className="text-xs">{number}</span></div>
              <div className="space-y-2"><h2 className="text-lg font-semibold">{title}</h2><p className="text-sm leading-6 text-muted-foreground">{description}</p></div>
              <Link href={href} className="flex min-h-11 items-center justify-between gap-2 border-t pt-4 text-sm font-semibold">살펴보기<span className="sr-only">: {title}</span><ArrowRight size={18} aria-hidden="true" /></Link>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="rounded-xl border border-dashed px-5 py-5 text-sm leading-6 text-muted-foreground">
        <h2 className="mb-1 font-semibold text-foreground">현재 확인할 수 있는 것</h2>
        <p>공통 UI와 화면 상태의 동작을 확인할 수 있습니다. 색상과 화면 배치는 검수용 기본값이며, 회원·주문·결제 및 앱 기능의 실제 연동은 포함하지 않습니다.</p>
      </section>
    </div>
  );
}
