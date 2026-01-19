import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

/**
 * Tooltip 컴포넌트는 요소에 마우스를 올렸을 때 추가 정보를 표시합니다.
 */
const meta: Meta<typeof Tooltip> = {
  title: "shared/ui/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "요소에 호버했을 때 추가 정보를 표시하는 툴팁 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 툴팁
 */
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">호버하세요</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>툴팁 내용입니다</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * 아이콘 버튼에 툴팁
 */
export const WithIconButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Plus" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>새로 만들기</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Edit" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>편집</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Trash2" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>삭제</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * 위치별 툴팁
 */
export const Positions: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">위</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>위쪽 툴팁</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">오른쪽</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>오른쪽 툴팁</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">아래</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>아래쪽 툴팁</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">왼쪽</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>왼쪽 툴팁</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * 텍스트에 툴팁
 */
export const OnText: Story = {
  render: () => (
    <p className="text-sm">
      이 문장에서{" "}
      <Tooltip>
        <TooltipTrigger className="underline decoration-dotted cursor-help">
          용어
        </TooltipTrigger>
        <TooltipContent>
          <p>이것은 용어에 대한 설명입니다.</p>
        </TooltipContent>
      </Tooltip>{" "}
      에 마우스를 올려보세요.
    </p>
  ),
};

/**
 * 긴 텍스트 툴팁
 */
export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">자세히 보기</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          이것은 긴 설명이 포함된 툴팁입니다. 복잡한 기능에 대한 추가 정보를 제공할 때 사용됩니다.
          여러 줄의 텍스트를 포함할 수 있습니다.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * 아이콘과 텍스트가 함께 있는 툴팁
 */
export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Icon name="Info" className="mr-2 h-4 w-4" />
          정보
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex items-center gap-2">
          <Icon name="AlertCircle" className="h-4 w-4" />
          <span>중요한 정보입니다</span>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * 툴바 예시
 */
export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 p-2 border rounded-lg">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="Bold" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>굵게 (Ctrl+B)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="Italic" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>기울임 (Ctrl+I)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="Underline" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>밑줄 (Ctrl+U)</p>
        </TooltipContent>
      </Tooltip>
      <div className="w-px h-6 bg-border mx-1" />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="AlignLeft" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>왼쪽 정렬</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="AlignCenter" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>가운데 정렬</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Icon name="AlignRight" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>오른쪽 정렬</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * 사용자 정보 툴팁
 */
export const UserInfo: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </button>
      </TooltipTrigger>
      <TooltipContent className="p-0 w-64">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">홍길동</div>
              <div className="text-sm text-muted-foreground">@hong</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            프론트엔드 개발자 | React, TypeScript
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * 키보드 단축키 툴팁
 */
export const WithShortcut: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Save" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>저장</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘S
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Copy" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>복사</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘C
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon name="Clipboard" className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>붙여넣기</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘V
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * 비활성화된 버튼 툴팁
 */
export const DisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled>저장</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>변경사항이 없어 저장할 수 없습니다.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * 지연 시간 설정
 */
export const WithDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">즉시</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>지연 없음 (0ms)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button variant="outline">기본</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>기본 지연 (300ms)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <Button variant="outline">느림</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>긴 지연 (700ms)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
