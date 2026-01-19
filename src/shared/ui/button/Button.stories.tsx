import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail, Loader2, ChevronRight } from "lucide-react";
import { Button } from "./Button";

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
export const Icon: Story = {
  args: {
    size: "icon",
    children: <Mail className="h-4 w-4" />,
  },
};

/**
 * 아이콘과 텍스트가 함께 있는 버튼
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="h-4 w-4" />
        이메일 보내기
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
        <Loader2 className="h-4 w-4 animate-spin" />
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
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  ),
};
