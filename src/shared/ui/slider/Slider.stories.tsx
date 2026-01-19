import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "shared/ui/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "범위 값을 선택하는 Slider 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const Volume: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>볼륨</span>
        <span>50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Price: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>가격 범위</span>
        <span>₩50,000</span>
      </div>
      <Slider defaultValue={[50000]} max={100000} step={1000} />
    </div>
  ),
};
