import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "../../components/card";
import { colorGroups, figmaColorUrl, grayscale, type ColorGroup, type ColorSwatch } from "./color-palette";
import "./color-palette.css";

function Swatch({ color, theme }: { color: ColorSwatch; theme: "light" | "dark" }) {
  const hex = theme === "dark" ? color.darkHex : color.hex;
  const alpha = theme === "dark" ? color.darkAlpha : color.alpha;
  return (
    <li>
      <Card className="color-preview__swatch">
        <div aria-hidden="true" className="color-preview__chip" style={{ backgroundColor: `var(${color.cssVariable})` }} />
        <div className="color-preview__label"><span>{color.name}</span><code>{hex}{alpha < 1 ? ` / ${Math.round(alpha * 100)}%` : ""}</code></div>
      </Card>
    </li>
  );
}

function ColorPalette({ groups = colorGroups, theme = "light" }: { groups?: readonly ColorGroup[]; theme?: "light" | "dark" }) {
  return (
    <main className="color-preview">
      <header className="color-preview__header">
        <p>THE LOUNGE / DESIGN SYSTEM</p>
        <h1>Color</h1>
        <p>더라운지에서 사용하는 색상을 확인합니다.</p>
      </header>
      <div className="color-preview__body">
        <div className="color-preview__intro">
          <h2>Colors</h2>
          <p><strong>Figma 색상 export 기준</strong></p>
          <p>전달된 light·dark 팔레트를 공통 CSS 변수로 표시합니다. 현재 두 모드의 색상값은 같으며, 버튼·배경 등 용도별 연결은 별도로 확인합니다.</p>
          <a href={figmaColorUrl} target="_blank" rel="noreferrer">Figma 색상 기준 보기</a>
        </div>
        <div className="color-preview__sections">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`color-title-${group.id}`}>
              <h3 id={`color-title-${group.id}`}>{group.title}</h3>
              <p className="color-preview__description">{group.description}</p>
              <div className="color-preview__panel">
                <ul className="color-preview__list">{group.colors.map((color) => <Swatch key={color.name} color={color} theme={theme} />)}</ul>
                {group.id === "grid-table-tab" && (
                  <div className="color-preview__pairs" aria-label="배경과 구분선 조합">
                    {grayscale.slice(0, 2).map((color) => (
                      <figure key={color.name}>
                        <div aria-hidden="true" className="color-preview__sample" style={{ backgroundColor: `var(${color.cssVariable})`, borderColor: `var(${grayscale[3].cssVariable})` }} />
                        <figcaption>Bg: {color.name}<br />Line: {grayscale[3].name}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

const meta = {
  title: "Foundations/Colors",
  component: ColorPalette,
  render: (args, context) => <ColorPalette {...args} theme={context.globals.theme === "dark" ? "dark" : "light"} />,
  parameters: { layout: "fullscreen", controls: { disable: true } },
} satisfies Meta<typeof ColorPalette>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = { name: "전체 색상" };
export const Grayscale: Story = { name: "회색", args: { groups: [colorGroups[0]] } };
export const Brand: Story = { name: "브랜드", args: { groups: [colorGroups[1]] } };
export const BlackAndWhite: Story = { name: "흑백", args: { groups: [colorGroups[2]] } };
export const StatusAndError: Story = { name: "상태와 오류", args: { groups: [colorGroups[3]] } };
export const GridTableTab: Story = { name: "표와 탭", args: { groups: [colorGroups[4]] } };

export const Dim: Story = { name: "오버레이", args: { groups: [colorGroups[5]] } };
