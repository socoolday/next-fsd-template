import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "shared/ui/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "진행 상태를 표시하는 Progress 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
  },
};

export const Zero: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

export const Half: Story = {
  args: {
    value: 50,
    className: "w-[300px]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>다운로드 중...</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};
