import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./Separator";

/**
 * Separator 컴포넌트는 콘텐츠를 시각적으로 구분하는 구분선입니다.
 */
const meta: Meta<typeof Separator> = {
  title: "shared/ui/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "콘텐츠를 시각적으로 구분하는 수평/수직 구분선 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "구분선 방향",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 수평 구분선
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          접근성이 뛰어난 UI 프리미티브
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>블로그</div>
        <Separator orientation="vertical" />
        <div>문서</div>
        <Separator orientation="vertical" />
        <div>소스</div>
      </div>
    </div>
  ),
};

/**
 * 수직 구분선
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center space-x-4 text-sm">
      <div>홈</div>
      <Separator orientation="vertical" />
      <div>제품</div>
      <Separator orientation="vertical" />
      <div>서비스</div>
      <Separator orientation="vertical" />
      <div>회사소개</div>
    </div>
  ),
};

/**
 * 메뉴 구분선 예시
 */
export const InMenu: Story = {
  render: () => (
    <div className="w-[200px] rounded-lg border p-2">
      <div className="px-2 py-1.5 text-sm">프로필</div>
      <div className="px-2 py-1.5 text-sm">설정</div>
      <Separator className="my-2" />
      <div className="px-2 py-1.5 text-sm">도움말</div>
      <div className="px-2 py-1.5 text-sm">피드백</div>
      <Separator className="my-2" />
      <div className="px-2 py-1.5 text-sm text-destructive">로그아웃</div>
    </div>
  ),
};

/**
 * 섹션 구분 예시
 */
export const SectionDivider: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="font-semibold">섹션 1</h3>
        <p className="text-sm text-muted-foreground">
          첫 번째 섹션의 내용입니다.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold">섹션 2</h3>
        <p className="text-sm text-muted-foreground">
          두 번째 섹션의 내용입니다.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="font-semibold">섹션 3</h3>
        <p className="text-sm text-muted-foreground">
          세 번째 섹션의 내용입니다.
        </p>
      </div>
    </div>
  ),
};
