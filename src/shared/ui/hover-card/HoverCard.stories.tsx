import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "@/shared/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./HoverCard";

const meta: Meta<typeof HoverCard> = {
  title: "shared/ui/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "마우스 호버 시 추가 정보를 보여주는 카드 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 HoverCard
 */
export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Icon name="CalendarDays" className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

/**
 * 사용자 프로필 카드
 */
export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-blue-500">
          홍길동
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              홍
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold">홍길동</h4>
            <p className="text-sm text-muted-foreground">
              Frontend Developer @ Company
            </p>
            <p className="text-sm">
              React, TypeScript, Next.js를 사용하여 웹 애플리케이션을 개발합니다.
            </p>
            <div className="flex items-center pt-2 gap-4">
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">123</strong> 팔로워
              </span>
              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">45</strong> 팔로잉
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

/**
 * 링크 미리보기
 */
export const LinkPreview: Story = {
  render: () => (
    <p className="text-sm">
      자세한 내용은{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="text-blue-500 underline">
            공식 문서
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Next.js Documentation</h4>
            <p className="text-sm text-muted-foreground">
              Next.js는 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크입니다.
              React Components를 사용하여 사용자 인터페이스를 구축하고,
              Next.js를 사용하여 추가 기능과 최적화를 활용합니다.
            </p>
            <p className="text-xs text-muted-foreground">
              nextjs.org
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      를 참조하세요.
    </p>
  ),
};
