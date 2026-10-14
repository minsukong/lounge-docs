import { Button } from "@lounge/ui/button";
import { Badge } from "@lounge/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@lounge/ui/card";
import { Label } from "@lounge/ui/label";
import { Textarea } from "@lounge/ui/textarea";
import { SampleForm } from "./sample-form";
import { OverlayExamples } from "./overlay-examples";

export function ComponentsScreen({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className="space-y-7 pb-8">
      {!embedded && <div className="space-y-3"><p className="text-xs font-semibold tracking-widest text-muted-foreground">COMPONENTS</p><h1 className="text-3xl font-bold">공통 UI</h1><p className="text-sm leading-6 text-muted-foreground">자주 사용하는 입력과 확인 동작을 한곳에서 살펴봅니다.</p></div>}
      <div className="grid items-start gap-5 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>입력 폼</CardTitle><CardDescription>필수 입력, 오류 안내와 초기화 동작을 확인합니다. * 표시는 필수 항목입니다.</CardDescription></CardHeader>
          <CardContent><SampleForm /></CardContent>
        </Card>
        <div className="space-y-5">
          <Card>
            <CardHeader><CardTitle>버튼과 배지</CardTitle><CardDescription>기본 표시와 비활성 상태의 가독성을 비교합니다.</CardDescription></CardHeader>
            <CardContent className="space-y-4"><div className="flex flex-wrap gap-3"><Button>기본 버튼</Button><Button variant="outline">보조 버튼</Button><Button variant="secondary">선택 버튼</Button><Button disabled>비활성 버튼</Button></div><div className="flex flex-wrap gap-2"><Badge>기본</Badge><Badge variant="secondary">보조</Badge><Badge variant="outline">안내</Badge></div></CardContent>
          </Card>
          <Card><CardHeader><CardTitle>다이얼로그와 하단 시트</CardTitle><CardDescription>열기, 닫기와 키보드 포커스 이동을 살펴봅니다.</CardDescription></CardHeader><CardContent><OverlayExamples /></CardContent></Card>
          <Card><CardHeader><CardTitle>여러 줄 입력</CardTitle></CardHeader><CardContent className="space-y-2"><Label htmlFor="review-note">검수 메모</Label><Textarea id="review-note" rows={4} placeholder="확인할 내용을 자유롭게 입력해 보세요." /><p className="text-xs leading-5 text-muted-foreground">메모는 저장하거나 전송하지 않습니다.</p></CardContent></Card>
        </div>
      </div>
    </div>
  );
}
