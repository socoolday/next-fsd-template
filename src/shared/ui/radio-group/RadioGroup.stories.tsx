import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "@/shared/ui/label";

const meta: Meta<typeof RadioGroup> = {
  title: "shared/ui/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "여러 옵션 중 하나를 선택하는 RadioGroup 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">옵션 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <RadioGroup defaultValue="card">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="card" />
        <Label htmlFor="card">신용카드</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="bank" id="bank" />
        <Label htmlFor="bank">계좌이체</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="kakao" id="kakao" />
        <Label htmlFor="kakao">카카오페이</Label>
      </div>
    </RadioGroup>
  ),
};
