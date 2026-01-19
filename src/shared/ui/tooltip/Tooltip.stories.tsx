import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

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
