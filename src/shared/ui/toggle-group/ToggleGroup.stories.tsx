import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "@/shared/ui/icon";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  title: "shared/ui/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "여러 개의 토글 버튼을 그룹으로 묶어 사용하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "단일 선택 또는 다중 선택 모드",
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Toggle 버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Toggle 버튼의 크기",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 단일 선택 모드
 */
export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <Icon name="AlignLeft" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Icon name="AlignCenter" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Icon name="AlignRight" className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * 다중 선택 모드
 */
export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Icon name="Bold" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Icon name="Italic" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Icon name="Underline" className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * Outline 변형
 */
export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <Icon name="AlignLeft" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Icon name="AlignCenter" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Icon name="AlignRight" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <Icon name="AlignJustify" className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * 크기 변형
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon name="AlignLeft" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon name="AlignCenter" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon name="AlignRight" className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon name="AlignLeft" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon name="AlignCenter" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon name="AlignRight" className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon name="AlignLeft" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon name="AlignCenter" className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon name="AlignRight" className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

/**
 * 비활성화된 아이템
 */
export const WithDisabled: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <Icon name="AlignLeft" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Icon name="AlignCenter" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right" disabled>
        <Icon name="AlignRight" className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
