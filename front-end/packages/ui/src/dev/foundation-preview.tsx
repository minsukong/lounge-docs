import { ComponentsScreen } from "./components-screen";
import { StatesScreen } from "./states-screen";

export function FoundationPreview() {
  return (
    <div className="space-y-10 pb-8">
      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">FOUNDATION / SHARED UI</p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">더라운지 공통 UI 검수</h1>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">하나의 웹에서 사용하는 입력·버튼·다이얼로그·화면 상태를 확인합니다. 화면 너비를 바꿔 반응형 배치를 살펴보세요. 실제 앱 환경 판별과 Native 연동은 아직 연결하지 않았습니다.</p>
      </section>
      <section className="space-y-5" aria-labelledby="preview-components-title">
        <div className="space-y-2"><h2 id="preview-components-title" className="text-2xl font-bold">공통 UI</h2><p className="text-sm leading-6 text-muted-foreground">필수 입력과 오류 안내, 버튼·배지, 다이얼로그·하단 시트, 여러 줄 입력을 살펴보세요.</p></div>
        <ComponentsScreen embedded />
      </section>
      <section className="space-y-5" aria-labelledby="preview-states-title">
        <div className="space-y-2"><h2 id="preview-states-title" className="text-2xl font-bold">화면 상태</h2><p className="text-sm leading-6 text-muted-foreground">로딩·빈 화면·오류·연결 끊김을 비교합니다. 실제 서버 응답을 재현하지 않습니다.</p></div>
        <StatesScreen embedded />
      </section>
    </div>
  );
}
