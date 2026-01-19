import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Label } from "@/shared/ui/label";

/**
 * Input 컴포넌트는 사용자로부터 텍스트 입력을 받는 기본 폼 요소입니다.
 */
const meta: Meta<typeof Input> = {
  title: "shared/ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 크기와 상태를 지원하는 입력 필드 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "입력 필드 크기",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
      description: "입력 타입",
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 입력 필드
 */
export const Default: Story = {
  args: {
    placeholder: "텍스트를 입력하세요",
  },
};

/**
 * 이메일 입력 필드
 */
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "이메일을 입력하세요",
  },
};

/**
 * 비밀번호 입력 필드
 */
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

/**
 * 파일 입력 필드
 */
export const File: Story = {
  args: {
    type: "file",
  },
};

/**
 * 비활성화된 입력 필드
 */
export const Disabled: Story = {
  args: {
    placeholder: "비활성화됨",
    disabled: true,
  },
};

/**
 * 작은 크기 입력 필드
 */
export const Small: Story = {
  args: {
    inputSize: "sm",
    placeholder: "작은 크기",
  },
};

/**
 * 큰 크기 입력 필드
 */
export const Large: Story = {
  args: {
    inputSize: "lg",
    placeholder: "큰 크기",
  },
};

/**
 * 레이블과 함께 사용하는 입력 필드
 */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="이메일을 입력하세요" />
    </div>
  ),
};

/**
 * 모든 크기를 한 번에 보여주는 예시
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input inputSize="sm" placeholder="Small" />
      <Input inputSize="default" placeholder="Default" />
      <Input inputSize="lg" placeholder="Large" />
    </div>
  ),
};
