"use client";

import { useState } from "react";
import { Button } from "@lounge/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@lounge/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@lounge/ui/sheet";

export function OverlayExamples() {
  const [message, setMessage] = useState("");
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>다이얼로그 열기</DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>동작을 확인해 주세요.</DialogTitle><DialogDescription>확인과 취소, 닫기 버튼을 눌러 보세요. 키보드에서는 Escape로 닫을 수 있습니다.</DialogDescription></DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />} onClick={() => setMessage("취소 버튼을 눌렀습니다.")}>취소</DialogClose>
              <DialogClose render={<Button />} onClick={() => setMessage("확인 버튼을 눌렀습니다.")}>확인</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>하단 시트 열기</SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader><SheetTitle>하단 시트</SheetTitle><SheetDescription>화면 아래에서 여는 공통 영역입니다. 자세한 내용과 선택 기능을 배치할 수 있습니다.</SheetDescription></SheetHeader>
            <div className="px-5 pb-2 text-sm leading-7 text-muted-foreground">모바일의 안전 영역을 고려한 기본 구조입니다. 실제 서비스의 선택 항목과 닫기 정책은 해당 화면을 만들 때 연결합니다.</div>
            <SheetFooter><SheetClose render={<Button />} onClick={() => setMessage("하단 시트를 닫았습니다.")}>닫기</SheetClose></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <p role="status" className="min-h-6 text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
