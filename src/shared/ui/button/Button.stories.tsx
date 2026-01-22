import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "../icon/Icon";
import { Button } from "./Button";
import React from "react";

/**
 * Button 컴포넌트는 사용자 인터랙션을 위한 기본적인 버튼 요소입니다.
 * 다양한 스타일 variant와 크기를 지원합니다.
 */
const meta: Meta<typeof Button> = {
  title: "shared/ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다. 테마 색상에 따라 primary 색상이 변경됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "버튼 스타일 변형",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "버튼 크기",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    asChild: {
      control: "boolean",
      description: "자식 요소에 스타일 적용 (Slot 사용)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼 스타일
 */
export const Default: Story = {
  args: {
    children: "버튼",
    variant: "default",
  },
};

/**
 * 삭제/위험한 액션에 사용하는 destructive 버튼
 */
export const Destructive: Story = {
  args: {
    children: "삭제",
    variant: "destructive",
  },
};

/**
 * 테두리만 있는 outline 버튼
 */
export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

/**
 * 보조 액션에 사용하는 secondary 버튼
 */
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

/**
 * 배경이 없는 ghost 버튼
 */
export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

/**
 * 링크 스타일의 버튼
 */
export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

/**
 * 작은 크기 버튼
 */
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

/**
 * 큰 크기 버튼
 */
export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

/**
 * 아이콘만 있는 버튼
 */
export const IconButton: Story = {
  args: {
    size: "icon",
    children: <Icon name="Mail" className="h-4 w-4" />,
  },
};

/**
 * 왼쪽에 아이콘이 있는 버튼
 */
export const IconLeft: Story = {
  args: {
    children: (
      <>
        <Icon name="Mail" className="h-4 w-4" />
        이메일 보내기
      </>
    ),
  },
};

/**
 * 오른쪽에 아이콘이 있는 버튼
 */
export const IconRight: Story = {
  args: {
    children: (
      <>
        다음
        <Icon name="ArrowRight" className="h-4 w-4" />
      </>
    ),
  },
};

/**
 * 로딩 상태 버튼
 */
export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Icon name="LoaderCircle" className="h-4 w-4 animate-spin" />
        로딩 중...
      </>
    ),
  },
};

/**
 * 비활성화된 버튼
 */
export const Disabled: Story = {
  args: {
    children: "비활성화",
    disabled: true,
  },
};

/**
 * 모든 variant를 한 번에 보여주는 예시
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * 모든 size를 한 번에 보여주는 예시
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Icon name="ChevronRight" className="h-4 w-4" />
      </Button>
    </div>
  ),
};

/**
 * 버튼 그룹
 */
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex">
      <Button variant="outline" className="rounded-r-none">
        <Icon name="Bold" className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="rounded-none border-x-0">
        <Icon name="Italic" className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="rounded-l-none">
        <Icon name="Underline" className="h-4 w-4" />
      </Button>
    </div>
  ),
};

/**
 * 전체 너비 버튼
 */
export const FullWidth: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Button className="w-full">로그인</Button>
      <Button variant="outline" className="w-full">회원가입</Button>
    </div>
  ),
};

/**
 * 소셜 로그인 버튼
 */
export const SocialButtons: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Button variant="outline" className="w-full">
        <Icon name="Github" className="h-4 w-4" />
        GitHub으로 로그인
      </Button>
      <Button variant="outline" className="w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90 border-[#FEE500]">
        <Icon name="MessageCircle" className="h-4 w-4" />
        카카오로 로그인
      </Button>
      <Button variant="outline" className="w-full bg-[#03C75A] text-white hover:bg-[#03C75A]/90 border-[#03C75A]">
        <Icon name="MessageSquare" className="h-4 w-4" />
        네이버로 로그인
      </Button>
    </div>
  ),
};

/**
 * 액션 버튼 그룹
 */
export const ActionButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button>
        <Icon name="Save" className="h-4 w-4" />
        저장
      </Button>
      <Button variant="outline">
        <Icon name="Pencil" className="h-4 w-4" />
        편집
      </Button>
      <Button variant="destructive">
        <Icon name="Trash" className="h-4 w-4" />
        삭제
      </Button>
    </div>
  ),
};

/**
 * 아이콘 버튼 (다양한 variant)
 */
export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button size="icon">
        <Icon name="Plus" className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Icon name="Settings" className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Icon name="Share2" className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Icon name="Heart" className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Icon name="Trash2" className="h-4 w-4" />
      </Button>
    </div>
  ),
};

/**
 * 로딩 상태 (다양한 variant)
 */
export const LoadingStates: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button disabled>
        <Icon name="LoaderCircle" className="h-4 w-4 animate-spin" />
        저장 중...
      </Button>
      <Button variant="outline" disabled>
        <Icon name="LoaderCircle" className="h-4 w-4 animate-spin" />
        처리 중...
      </Button>
      <Button variant="destructive" disabled>
        <Icon name="LoaderCircle" className="h-4 w-4 animate-spin" />
        삭제 중...
      </Button>
    </div>
  ),
};

/**
 * 툴바 예시
 */
export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 p-2 border rounded-lg">
      <Button variant="ghost" size="icon">
        <Icon name="Bold" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="Italic" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="Underline" className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <Button variant="ghost" size="icon">
        <Icon name="TextAlignJustify" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="TextAlignCenter" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="TextAlignStart" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="TextAlignEnd" className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <Button variant="ghost" size="icon">
        <Icon name="List" className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="ListOrdered" className="h-4 w-4" />
      </Button>
    </div>
  ),
};

/**
 * 다운로드 버튼
 */
export const DownloadButton: Story = {
  render: () => (
    <Button>
      <Icon name="Download" className="h-4 w-4" />
      파일 다운로드
    </Button>
  ),
};

/**
 * 업로드 버튼
 */
export const UploadButton: Story = {
  render: () => (
    <Button variant="outline" className="gap-2">
      <Icon name="Upload" className="h-4 w-4" />
      파일 업로드
    </Button>
  ),
};

/**
 * 플로팅 액션 버튼
 */
export const FloatingActionButton: Story = {
  render: () => (
    <Button
      size="icon"
      className="h-14 w-14 rounded-full shadow-lg"
    >
      <Icon name="Plus" className="h-6 w-6" />
    </Button>
  ),
};

/**
 * 확장 플로팅 버튼
 */
export const ExtendedFab: Story = {
  render: () => (
    <Button className="rounded-full shadow-lg px-6">
      <Icon name="Pencil" className="h-4 w-4" />
      새 글 작성
    </Button>
  ),
};

/**
 * 페이지네이션 버튼
 */
export const PaginationButtons: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Button variant="outline" size="icon">
        <Icon name="ChevronsLeft" className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon name="ChevronLeft" className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm">1</Button>
      <Button variant="outline" size="sm">2</Button>
      <Button size="sm">3</Button>
      <Button variant="outline" size="sm">4</Button>
      <Button variant="outline" size="sm">5</Button>
      <Button variant="outline" size="icon">
        <Icon name="ChevronRight" className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon name="ChevronsRight" className="h-4 w-4" />
      </Button>
    </div>
  ),
};

/**
 * 그라디언트 버튼
 */
export const GradientButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
        그라디언트
      </Button>
      <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
        그라디언트
      </Button>
      <Button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600">
        그라디언트
      </Button>
    </div>
  ),
};
