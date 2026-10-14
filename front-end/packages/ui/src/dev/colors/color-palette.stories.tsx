import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "../../components/card";
import { colorGroups, figmaColorUrl, grayscale, type ColorGroup, type ColorSwatch } from "./color-palette";
import "./color-palette.css";

function Swatch({ color }: { color: ColorSwatch }) {
  return (
    <li>
      <Card className="color-preview__swatch">
        {color.image ? (
          // Figma에서 제공한 스와치 SVG를 원본 크기로 표시합니다.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={color.image} alt="" width={110} height={80} className="color-preview__chip" />
        ) : (
          <div aria-hidden="true" className="color-preview__chip" style={{ backgroundColor: color.hex }} />
        )}
        <div className="color-preview__label"><span>{color.name}</span><code>{color.hex}</code></div>
      </Card>
    </li>
  );
}

function ColorPalette({ groups = colorGroups }: { groups?: readonly ColorGroup[] }) {
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
          <p><strong>디자인 작업 중인 초안</strong> · 2026-10-14 기준</p>
          <p>Figma의 실제 색상값을 기준으로 표시했습니다. 이 색상표는 앱의 현재 테마와 별도로 검수합니다.</p>
          <a href={figmaColorUrl} target="_blank" rel="noreferrer">Figma 색상 기준 보기</a>
        </div>
        <div className="color-preview__sections">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`color-title-${group.id}`}>
              <h3 id={`color-title-${group.id}`}>{group.title}</h3>
              <p className="color-preview__description">{group.description}</p>
              <div className="color-preview__panel">
                <ul className="color-preview__list">{group.colors.map((color) => <Swatch key={color.name} color={color} />)}</ul>
                {group.id === "grid-table-tab" && (
                  <div className="color-preview__pairs" aria-label="배경과 구분선 조합">
                    {grayscale.slice(0, 2).map((color) => (
                      <figure key={color.name}>
                        <div aria-hidden="true" className="color-preview__sample" style={{ backgroundColor: color.hex, borderColor: grayscale[3].hex }} />
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
