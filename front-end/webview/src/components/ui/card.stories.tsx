import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

const meta = {
  title: "Components/Card", component: Card, tags: ["autodocs"],
  render: () => <Card className="max-w-sm"><CardHeader><CardTitle>안내 카드</CardTitle><CardDescription>공통 정보 영역의 기본 형태입니다.</CardDescription></CardHeader><CardContent>텍스트가 길어지면 자연스럽게 줄바꿈합니다. 화면 너비를 바꾸어 배치를 살펴볼 수 있습니다.</CardContent></Card>,
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
