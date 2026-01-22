import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeToggle, ThemeToggleSimple } from "./ThemeToggle";
import { ThemeColorPicker } from "./ThemeColorPicker";

/**
 * ThemeToggle 컴포넌트는 다크/라이트 모드를 전환합니다.
 */
const meta: Meta<typeof ThemeToggle> = {
  title: "shared/ui/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다크/라이트/시스템 모드를 전환하는 토글 버튼 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 테마 토글 (다크/라이트/시스템)
 */
export const Default: Story = {
  render: () => <ThemeToggle />,
};

/**
 * 다크/라이트만 전환하는 버전
 * 드롭다운 메뉴에서 시스템 옵션이 없습니다.
 */
export const LightDarkOnly: Story = {
  render: () => <ThemeToggle showSystem={false} />,
};

/**
 * 간단한 테마 토글
 * 클릭 시 바로 다크/라이트 모드를 전환합니다.
 * 드롭다운 메뉴 없이 바로 토글됩니다.
 */
export const Simple: Story = {
  render: () => <ThemeToggleSimple />,
};

/**
 * 테마 색상 선택기
 */
export const ColorPicker: Story = {
  render: () => <ThemeColorPicker />,
};

/**
 * 테마 토글과 색상 선택기 함께 사용
 */
export const Combined: Story = {
  render: () => (
    <div className="flex gap-2">
      <ThemeToggle />
      <ThemeColorPicker />
    </div>
  ),
};

/**
 * 네비게이션에서 사용하는 예시
 */
export const InNavbar: Story = {
  render: () => (
    <div className="flex items-center justify-between w-[600px] p-4 border rounded-lg">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">로고</span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium hover:text-primary">
          홈
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary">
          서비스
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary">
          문의
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ThemeColorPicker />
      </div>
    </div>
  ),
};
