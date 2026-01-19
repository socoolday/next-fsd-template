import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

/**
 * Avatar 컴포넌트는 사용자 프로필 이미지를 표시합니다.
 */
const meta: Meta<typeof Avatar> = {
  title: "shared/ui/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다. 이미지 로드 실패 시 폴백을 표시합니다.",
      },
    },
  },
  tags: ["autodocs"],
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
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xs">SC</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xs">SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xl">SC</AvatarFallback>
      </Avatar>
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
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 온라인 상태 표시
 */
export const WithStatus: Story = {
  render: () => (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
    </div>
  ),
};
