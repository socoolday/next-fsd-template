import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

/**
 * Badge 컴포넌트는 상태나 카테고리를 표시하는 작은 라벨입니다.
 */
const meta: Meta<typeof Badge> = {
  title: "shared/ui/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "상태, 카테고리, 태그 등을 표시하는 작은 라벨 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "배지 스타일 변형",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 배지
 */
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

/**
 * Secondary 배지
 */
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

/**
 * Destructive 배지
 */
export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

/**
 * Outline 배지
 */
export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

/**
 * 모든 variant를 한 번에 보여주는 예시
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

/**
 * 상태 표시 예시
 */
export const StatusExample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">활성</Badge>
      <Badge variant="secondary">대기</Badge>
      <Badge variant="destructive">오류</Badge>
      <Badge variant="outline">초안</Badge>
    </div>
  ),
};

/**
 * 카테고리 표시 예시
 */
export const CategoryExample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>프론트엔드</Badge>
      <Badge>백엔드</Badge>
      <Badge>디자인</Badge>
      <Badge>DevOps</Badge>
    </div>
  ),
};
