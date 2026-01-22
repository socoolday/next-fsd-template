import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "../icon/Icon";
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
      <Badge className="bg-green-500 hover:bg-green-600">완료</Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600">진행중</Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">대기</Badge>
      <Badge variant="destructive">오류</Badge>
      <Badge variant="outline">초안</Badge>
    </div>
  ),
};

/**
 * 아이콘과 함께 사용
 */
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <Icon name="Check" className="mr-1 h-3 w-3" />
        완료
      </Badge>
      <Badge variant="secondary">
        <Icon name="Clock" className="mr-1 h-3 w-3" />
        대기중
      </Badge>
      <Badge variant="destructive">
        <Icon name="X" className="mr-1 h-3 w-3" />
        실패
      </Badge>
      <Badge variant="outline">
        <Icon name="Star" className="mr-1 h-3 w-3" />
        즐겨찾기
      </Badge>
    </div>
  ),
};

/**
 * 숫자 카운트 배지
 */
export const CountBadge: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge className="rounded-full px-2">1</Badge>
      <Badge className="rounded-full px-2">12</Badge>
      <Badge className="rounded-full px-2">99+</Badge>
      <Badge variant="destructive" className="rounded-full px-2">3</Badge>
      <Badge variant="secondary" className="rounded-full px-2">NEW</Badge>
    </div>
  ),
};

/**
 * 닫기 버튼이 있는 배지 (태그 스타일)
 */
export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary" className="gap-1 pr-1">
        React
        <button className="ml-1 rounded-full hover:bg-muted p-0.5" title="닫기">
          <Icon name="X" className="h-3 w-3" />
        </button>
      </Badge>
      <Badge variant="secondary" className="gap-1 pr-1">
        TypeScript
        <button className="ml-1 rounded-full hover:bg-muted p-0.5" title="닫기">
          <Icon name="X" className="h-3 w-3" />
        </button>
      </Badge>
      <Badge variant="secondary" className="gap-1 pr-1">
        Next.js
        <button className="ml-1 rounded-full hover:bg-muted p-0.5" title="닫기">
          <Icon name="X" className="h-3 w-3" />
        </button>
      </Badge>
    </div>
  ),
};

/**
 * 커스텀 컬러 배지
 */
export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-pink-500 hover:bg-pink-600">Pink</Badge>
      <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
      <Badge className="bg-indigo-500 hover:bg-indigo-600">Indigo</Badge>
      <Badge className="bg-cyan-500 hover:bg-cyan-600">Cyan</Badge>
      <Badge className="bg-orange-500 hover:bg-orange-600">Orange</Badge>
      <Badge className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
        Gradient
      </Badge>
    </div>
  ),
};

/**
 * 온라인 상태 배지
 */
export const OnlineStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Badge className="bg-green-500 hover:bg-green-600 gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        온라인
      </Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black gap-1.5">
        <span className="h-2 w-2 rounded-full bg-black/70" />
        자리비움
      </Badge>
      <Badge className="bg-red-500 hover:bg-red-600 gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white" />
        다른용무중
      </Badge>
      <Badge variant="secondary" className="gap-1.5">
        <span className="h-2 w-2 rounded-full bg-gray-400" />
        오프라인
      </Badge>
    </div>
  ),
};

/**
 * 우선순위 배지
 */
export const Priority: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-red-600 hover:bg-red-700">
        <Icon name="TriangleAlert" className="mr-1 h-3 w-3" />
        긴급
      </Badge>
      <Badge className="bg-orange-500 hover:bg-orange-600">
        <Icon name="ArrowUp" className="mr-1 h-3 w-3" />
        높음
      </Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600">
        <Icon name="Minus" className="mr-1 h-3 w-3" />
        보통
      </Badge>
      <Badge variant="secondary">
        <Icon name="ArrowDown" className="mr-1 h-3 w-3" />
        낮음
      </Badge>
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

/**
 * 크기 변형
 */
export const SizeVariations: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge className="text-[10px] px-1.5 py-0">XS</Badge>
      <Badge className="text-xs px-2 py-0.5">SM</Badge>
      <Badge>Default</Badge>
      <Badge className="text-sm px-3 py-1">LG</Badge>
      <Badge className="text-base px-4 py-1.5">XL</Badge>
    </div>
  ),
};
