import { colorTokens, darkColorTokens } from "./color-tokens";

export type ColorSwatch = Readonly<{ name: string; hex: string; cssVariable: string; alpha: number; darkHex: string; darkAlpha: number }>;
export type ColorGroup = Readonly<{ id: string; title: string; description: string; colors: readonly ColorSwatch[] }>;

const colors = (group: string): readonly ColorSwatch[] => colorTokens
  .filter((token) => token.group === group)
  .map((token) => {
    const dark = darkColorTokens.find((item) => item.variable === token.variable);
    if (!dark) throw new Error(`Missing dark color: ${token.variable}`);
    return { name: token.name, hex: token.hex, cssVariable: token.variable, alpha: token.alpha, darkHex: dark.hex, darkAlpha: dark.alpha };
  });

export const grayscale = colors("Gray");
export const colorGroups = [
  { id: "grayscale", title: "Grayscale Color", description: "Figma에서 전달한 회색 팔레트입니다.", colors: grayscale },
  { id: "brand", title: "Brand Color", description: "Figma에서 전달한 브랜드 색상입니다.", colors: colors("Brand") },
  { id: "black-white", title: "Black & White", description: "검정과 흰색 기본 팔레트입니다.", colors: colors("BW") },
  { id: "status", title: "Status & Error", description: "오류·경고·안내·성공에 사용할 색상 팔레트입니다.", colors: colors("status") },
  { id: "grid-table-tab", title: "Grid / Table / Tab Color", description: "배경·구분선 검수용 회색 조합입니다. 용도별 연결은 별도로 확인합니다.", colors: grayscale.slice(0, 5) },
  { id: "dim", title: "Dim", description: "알파값을 포함한 오버레이 색상입니다.", colors: colors("Dim") },
] as const satisfies readonly ColorGroup[];

export const figmaColorUrl = "https://www.figma.com/design/H8jvaSH1hEZYgxoxZftE4d/The-Lounge-3.0-UXUI?node-id=7935-1379";
