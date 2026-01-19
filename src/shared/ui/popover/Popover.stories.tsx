import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

const meta: Meta<typeof Popover> = {
  title: "shared/ui/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "팝오버 형태로 추가 콘텐츠를 표시하는 Popover 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">팝오버 열기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">크기</h4>
            <p className="text-sm text-muted-foreground">
              레이어의 크기를 설정합니다.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">너비</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">높이</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">정보</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">이것은 간단한 팝오버입니다.</p>
      </PopoverContent>
    </Popover>
  ),
};
