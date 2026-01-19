import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarStatusBadge,
  AvatarWithStatus,
} from "./Avatar";

/**
 * Avatar 컴포넌트는 사용자 프로필 이미지를 표시합니다.
 * 다양한 크기와 상태 표시를 지원합니다.
 */
const meta: Meta<typeof Avatar> = {
  title: "shared/ui/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다. 다양한 크기와 상태(온라인, 오프라인, 자리비움, 다른용무중) 표시를 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "xl"],
      description: "아바타 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 이미지가 있는 아바타
 */
export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 폴백만 있는 아바타 (이미지 없음)
 */
export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JP</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 다양한 크기의 아바타
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xs">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback size="xs">SC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback size="sm">SC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="default">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback size="lg">SC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback size="xl">SC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xl</span>
      </div>
    </div>
  ),
};

/**
 * 온라인 상태 - 사용자가 현재 온라인임
 */
export const StatusOnline: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarStatusBadge status="online" />
    </div>
  ),
};

/**
 * 오프라인 상태 - 사용자가 로그아웃됨
 */
export const StatusOffline: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarStatusBadge status="offline" />
    </div>
  ),
};

/**
 * 자리비움 상태 - 사용자가 잠시 자리를 비움
 */
export const StatusAway: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarStatusBadge status="away" />
    </div>
  ),
};

/**
 * 다른 용무 중 상태 - 사용자가 바쁨
 */
export const StatusBusy: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarStatusBadge status="busy" />
    </div>
  ),
};

/**
 * 방해금지 상태 - 알림을 받지 않음
 */
export const StatusDoNotDisturb: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <AvatarStatusBadge status="dnd" />
    </div>
  ),
};

/**
 * 모든 상태 표시
 */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <AvatarStatusBadge status="online" />
        </div>
        <span className="text-xs text-muted-foreground">온라인</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <AvatarStatusBadge status="away" />
        </div>
        <span className="text-xs text-muted-foreground">자리비움</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <AvatarStatusBadge status="busy" />
        </div>
        <span className="text-xs text-muted-foreground">다른용무중</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <AvatarStatusBadge status="dnd" />
        </div>
        <span className="text-xs text-muted-foreground">방해금지</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative inline-block">
          <Avatar>
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <AvatarStatusBadge status="offline" />
        </div>
        <span className="text-xs text-muted-foreground">오프라인</span>
      </div>
    </div>
  ),
};

/**
 * AvatarWithStatus 헬퍼 컴포넌트 사용
 */
export const WithStatusHelper: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <AvatarWithStatus
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="SC"
        status="online"
        size="default"
      />
      <AvatarWithStatus
        fallback="JP"
        status="away"
        size="lg"
      />
      <AvatarWithStatus
        fallback="AB"
        status="busy"
        size="xl"
      />
    </div>
  ),
};

/**
 * 크기별 상태 표시
 */
export const StatusWithSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="relative inline-block">
        <Avatar size="xs">
          <AvatarFallback size="xs">XS</AvatarFallback>
        </Avatar>
        <AvatarStatusBadge status="online" size="xs" />
      </div>
      <div className="relative inline-block">
        <Avatar size="sm">
          <AvatarFallback size="sm">SM</AvatarFallback>
        </Avatar>
        <AvatarStatusBadge status="online" size="sm" />
      </div>
      <div className="relative inline-block">
        <Avatar size="default">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <AvatarStatusBadge status="online" size="default" />
      </div>
      <div className="relative inline-block">
        <Avatar size="lg">
          <AvatarFallback size="lg">LG</AvatarFallback>
        </Avatar>
        <AvatarStatusBadge status="online" size="lg" />
      </div>
      <div className="relative inline-block">
        <Avatar size="xl">
          <AvatarFallback size="xl">XL</AvatarFallback>
        </Avatar>
        <AvatarStatusBadge status="online" size="xl" />
      </div>
    </div>
  ),
};

/**
 * 아바타 그룹
 */
export const Group: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-muted text-muted-foreground text-xs">
          +3
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 색상이 있는 폴백
 */
export const ColoredFallbacks: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">GH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-orange-500 text-white">
          IJ
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 테두리가 있는 아바타
 */
export const WithBorder: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="ring-2 ring-primary ring-offset-2 ring-offset-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-green-500 ring-offset-2 ring-offset-background">
        <AvatarFallback className="bg-green-100 text-green-700">AB</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-blue-500 ring-offset-2 ring-offset-background">
        <AvatarFallback className="bg-blue-100 text-blue-700">CD</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 사각형 아바타
 */
export const Squared: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="rounded-lg">SC</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-md">
        <AvatarFallback className="rounded-md">AB</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-sm">
        <AvatarFallback className="rounded-sm">CD</AvatarFallback>
      </Avatar>
    </div>
  ),
};
