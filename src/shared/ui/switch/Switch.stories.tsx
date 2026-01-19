import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";
import { Label } from "@/shared/ui/label";

/**
 * Switch 컴포넌트는 켜기/끄기 상태를 전환하는 토글 스위치입니다.
 */
const meta: Meta<typeof Switch> = {
  title: "shared/ui/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "켜기/끄기 상태를 전환하는 토글 스위치 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "활성화 상태",
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
 * 기본 스위치
 */
export const Default: Story = {
  args: {},
};

/**
 * 활성화된 상태
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * 비활성화된 스위치
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * 레이블과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">비행기 모드</Label>
    </div>
  ),
};

/**
 * 설정 예시
 */
export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications" className="font-normal">
          알림 허용
        </Label>
        <Switch id="notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="dark-mode" className="font-normal">
          다크 모드
        </Label>
        <Switch id="dark-mode" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-save" className="font-normal">
          자동 저장
        </Label>
        <Switch id="auto-save" defaultChecked />
      </div>
    </div>
  ),
};
