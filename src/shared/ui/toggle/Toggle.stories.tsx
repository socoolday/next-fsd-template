import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "@/shared/ui/icon";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "shared/ui/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "온/오프 상태를 가지는 토글 버튼 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "primary", "secondary", "destructive"],
      description: "Toggle 버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Toggle 버튼의 크기",
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
 * 기본 Toggle
 */
export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Icon name="Bold" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * Outline 변형
 */
export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Icon name="Italic" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * 텍스트와 함께
 */
export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Icon name="Bold" className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
  ),
};

/**
 * 비활성화 상태
 */
export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle underline">
      <Icon name="Underline" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * 크기 변형
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Toggle small">
        <Icon name="Bold" className="h-4 w-4" />
      </Toggle>
      <Toggle size="default" aria-label="Toggle default">
        <Icon name="Bold" className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <Icon name="Bold" className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

/**
 * Primary 색상
 */
export const Primary: Story = {
  render: () => (
    <Toggle variant="primary" aria-label="Toggle bold">
      <Icon name="Bold" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * Secondary 색상
 */
export const Secondary: Story = {
  render: () => (
    <Toggle variant="secondary" aria-label="Toggle italic">
      <Icon name="Italic" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * Destructive 색상
 */
export const Destructive: Story = {
  render: () => (
    <Toggle variant="destructive" aria-label="Toggle underline">
      <Icon name="Underline" className="h-4 w-4" />
    </Toggle>
  ),
};

/**
 * 모든 변형 모아보기
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm w-24">Default:</span>
        <Toggle aria-label="Toggle bold">
          <Icon name="Bold" className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <Icon name="Italic" className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Icon name="Underline" className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-24">Outline:</span>
        <Toggle variant="outline" aria-label="Toggle bold">
          <Icon name="Bold" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Icon name="Italic" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle underline">
          <Icon name="Underline" className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-24">Primary:</span>
        <Toggle variant="primary" aria-label="Toggle bold">
          <Icon name="Bold" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="primary" aria-label="Toggle italic">
          <Icon name="Italic" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="primary" aria-label="Toggle underline">
          <Icon name="Underline" className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-24">Secondary:</span>
        <Toggle variant="secondary" aria-label="Toggle bold">
          <Icon name="Bold" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="secondary" aria-label="Toggle italic">
          <Icon name="Italic" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="secondary" aria-label="Toggle underline">
          <Icon name="Underline" className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm w-24">Destructive:</span>
        <Toggle variant="destructive" aria-label="Toggle bold">
          <Icon name="Bold" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="destructive" aria-label="Toggle italic">
          <Icon name="Italic" className="h-4 w-4" />
        </Toggle>
        <Toggle variant="destructive" aria-label="Toggle underline">
          <Icon name="Underline" className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  ),
};
