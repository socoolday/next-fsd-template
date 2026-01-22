import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "@/shared/ui/icon";
import { Input } from "./Input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";

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

/**
 * 아이콘이 있는 입력 필드 (왼쪽)
 */
export const WithLeftIcon: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Icon
        name="Search"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
      <Input className="pl-10" placeholder="검색어를 입력하세요" />
    </div>
  ),
};

/**
 * 아이콘이 있는 입력 필드 (오른쪽)
 */
export const WithRightIcon: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Input className="pr-10" placeholder="이메일을 입력하세요" type="email" />
      <Icon
        name="Mail"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
    </div>
  ),
};

/**
 * 버튼과 함께 사용
 */
export const WithButton: Story = {
  render: () => (
    <div className="flex w-[400px] gap-2">
      <Input placeholder="이메일을 입력하세요" type="email" />
      <Button>구독</Button>
    </div>
  ),
};

/**
 * 에러 상태
 */
export const WithError: Story = {
  render: () => (
    <div className="w-[300px] space-y-1.5">
      <Label htmlFor="error-email">이메일</Label>
      <Input
        id="error-email"
        type="email"
        placeholder="이메일을 입력하세요"
        className="border-red-500 focus-visible:ring-red-500"
        defaultValue="invalid-email"
      />
      <p className="text-sm text-red-500">올바른 이메일 형식이 아닙니다.</p>
    </div>
  ),
};

/**
 * 성공 상태
 */
export const WithSuccess: Story = {
  render: () => (
    <div className="w-[300px] space-y-1.5">
      <Label htmlFor="success-email">이메일</Label>
      <div className="relative">
        <Input
          id="success-email"
          type="email"
          placeholder="이메일을 입력하세요"
          className="border-green-500 focus-visible:ring-green-500 pr-10"
          defaultValue="valid@email.com"
        />
        <Icon
          name="Check"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500"
        />
      </div>
      <p className="text-sm text-green-500">사용 가능한 이메일입니다.</p>
    </div>
  ),
};

/**
 * 도움말 텍스트
 */
export const WithHelperText: Story = {
  render: () => (
    <div className="w-[300px] space-y-1.5">
      <Label htmlFor="username">사용자명</Label>
      <Input id="username" placeholder="사용자명을 입력하세요" />
      <p className="text-sm text-muted-foreground">
        영문, 숫자, 밑줄(_)만 사용할 수 있습니다.
      </p>
    </div>
  ),
};

/**
 * 검색 입력 필드
 */
export const SearchInput: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Icon
        name="Search"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
      <Input
        type="search"
        className="pl-10 pr-10"
        placeholder="검색..."
      />
      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" title="검색 취소">
        <Icon name="X" className="h-4 w-4 text-muted-foreground hover:text-foreground" />
      </button>
    </div>
  ),
};

/**
 * 비밀번호 토글
 */
export const PasswordToggle: Story = {
  render: function PasswordToggleInput() {
    return (
      <div className="relative w-[300px]">
        <Input
          type="password"
          className="pr-10"
          placeholder="비밀번호를 입력하세요"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          title="비밀번호 토글"
        >
          <Icon name="Eye" className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </button>
      </div>
    );
  },
};

/**
 * 글자 수 카운터
 */
export const WithCounter: Story = {
  render: () => (
    <div className="w-[300px] space-y-1.5">
      <Label htmlFor="bio">자기소개</Label>
      <Input id="bio" placeholder="자기소개를 입력하세요" maxLength={100} />
      <p className="text-sm text-muted-foreground text-right">0 / 100</p>
    </div>
  ),
};

/**
 * 접두어가 있는 입력 필드
 */
export const WithPrefix: Story = {
  render: () => (
    <div className="flex w-[300px]">
      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm shadow-sm">
        https://
      </span>
      <Input className="rounded-l-none" placeholder="example.com" />
    </div>
  ),
};

/**
 * 접미어가 있는 입력 필드
 */
export const WithSuffix: Story = {
  render: () => (
    <div className="flex w-[300px]">
      <Input className="rounded-r-none" placeholder="0" type="number" />
      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-input bg-muted text-muted-foreground text-sm shadow-sm">
        원
      </span>
    </div>
  ),
};

/**
 * 로딩 상태
 */
export const Loading: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Input placeholder="검색 중..." disabled />
      <Icon
        name="Loader"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin"
      />
    </div>
  ),
};

/**
 * 다양한 타입
 */
export const AllTypes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-1.5">
        <Label>텍스트</Label>
        <Input type="text" placeholder="텍스트 입력" />
      </div>
      <div className="space-y-1.5">
        <Label>이메일</Label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-1.5">
        <Label>비밀번호</Label>
        <Input type="password" placeholder="••••••••" />
      </div>
      <div className="space-y-1.5">
        <Label>숫자</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="space-y-1.5">
        <Label>전화번호</Label>
        <Input type="tel" placeholder="010-0000-0000" />
      </div>
      <div className="space-y-1.5">
        <Label>URL</Label>
        <Input type="url" placeholder="https://example.com" />
      </div>
      <div className="space-y-1.5">
        <Label>날짜</Label>
        <Input type="date" />
      </div>
      <div className="space-y-1.5">
        <Label>시간</Label>
        <Input type="time" />
      </div>
    </div>
  ),
};
