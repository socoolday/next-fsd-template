import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";
import { Label } from "@/shared/ui/label";

/**
 * Checkbox 컴포넌트는 사용자가 옵션을 선택하거나 선택 해제할 수 있는 폼 요소입니다.
 */
const meta: Meta<typeof Checkbox> = {
  title: "shared/ui/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "옵션을 선택하거나 해제할 수 있는 체크박스 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "체크 상태",
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
 * 기본 체크박스
 */
export const Default: Story = {
  args: {},
};

/**
 * 체크된 상태
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * 비활성화된 체크박스
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * 비활성화 + 체크된 상태
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

/**
 * 레이블과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">이용약관에 동의합니다</Label>
    </div>
  ),
};

/**
 * 폼에서 사용하는 체크박스 그룹
 */
export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1" className="font-normal">
          (필수) 이용약관 동의
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <Label htmlFor="terms2" className="font-normal">
          (필수) 개인정보 수집 및 이용 동의
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms3" />
        <Label htmlFor="terms3" className="font-normal">
          (선택) 마케팅 정보 수신 동의
        </Label>
      </div>
    </div>
  ),
};
