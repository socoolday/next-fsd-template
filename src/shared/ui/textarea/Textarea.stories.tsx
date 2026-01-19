import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Textarea";
import { Label } from "@/shared/ui/label";

const meta: Meta<typeof Textarea> = {
  title: "shared/ui/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "여러 줄의 텍스트를 입력받는 Textarea 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "메시지를 입력하세요...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">메시지</Label>
      <Textarea id="message" placeholder="메시지를 입력하세요..." />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화됨",
    disabled: true,
  },
};

export const WithText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="bio">자기소개</Label>
      <Textarea id="bio" placeholder="자기소개를 작성해주세요" />
      <p className="text-sm text-muted-foreground">최대 500자까지 입력 가능합니다.</p>
    </div>
  ),
};
