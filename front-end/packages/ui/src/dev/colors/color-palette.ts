export type ColorSwatch = Readonly<{ name: string; hex: string; image?: string }>;
export type ColorGroup = Readonly<{ id: string; title: string; description: string; colors: readonly ColorSwatch[] }>;

// Figma 02 Color 기준의 검수용 스냅샷입니다. 앱 토큰으로 내보내지 않습니다.
export const grayscale = [
  { name: "Gray 50", hex: "#FAFAFA" },
  { name: "Gray 100", hex: "#F6F7F8" },
  { name: "Gray 150", hex: "#EFF1F4" },
  { name: "Gray 200", hex: "#E8EBF0" },
  { name: "Gray 300", hex: "#D8DDE4" },
  { name: "Gray 400", hex: "#A5A8AD" },
  { name: "Gray 500", hex: "#808790" },
  { name: "Gray 600", hex: "#696F75" },
  { name: "Gray 700", hex: "#4C5054" },
  { name: "Gray 800", hex: "#303438" },
  { name: "Gray 900", hex: "#111111" },
] as const satisfies readonly ColorSwatch[];

export const colorGroups = [
  { id: "grayscale", title: "Grayscale Color", description: "텍스트, 배경, 선에 사용하는 회색입니다.", colors: grayscale },
  { id: "brand", title: "Brand Color", description: "버튼과 주요 요소, 콘텐츠 강조에 사용하는 브랜드 색상입니다.", colors: [
    { name: "Blue 100", hex: "#ECEFF8" },
    { name: "Blue 200", hex: "#D9DEF2" },
    { name: "Blue 300", hex: "#B4BEE4" },
    { name: "Blue 400", hex: "#697CC9" },
    { name: "Blue 500", hex: "#435CBC" },
    { name: "Blue 600", hex: "#364996" },
    { name: "Blue 700", hex: "#1B254B", image: "./lounge-colors-blue700.svg" },
    { name: "Blue 800", hex: "#131920", image: "./lounge-colors-blue800.svg" },
  ] },
  { id: "black-white", title: "Black & White", description: "제목, 본문, 배경과 오버레이에 사용하는 기본 색상입니다.", colors: [
    { name: "Black", hex: "#000000" }, { name: "White", hex: "#FFFFFF" },
  ] },
  { id: "status", title: "Status & Error", description: "오류, 경고, 안내와 성공 상태를 나타내는 색상입니다.", colors: [
    { name: "Red", hex: "#E63838" }, { name: "Orange", hex: "#FF7752" },
    { name: "Blue", hex: "#217DE2" }, { name: "Green", hex: "#16B06B" },
  ] },
  { id: "grid-table-tab", title: "Grid / Table / Tab Color", description: "표와 탭의 배경·구분선에 사용하는 색상입니다.", colors: grayscale.slice(0, 5) },
] as const satisfies readonly ColorGroup[];

export const figmaColorUrl = "https://www.figma.com/design/H8jvaSH1hEZYgxoxZftE4d/The-Lounge-3.0-UXUI?node-id=7935-1379";
