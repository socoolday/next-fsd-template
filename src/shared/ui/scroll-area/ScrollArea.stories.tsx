import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea } from "./ScrollArea";
import { Separator } from "@/shared/ui/separator";

const meta: Meta<typeof ScrollArea> = {
  title: "shared/ui/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "커스텀 스크롤바가 있는 ScrollArea 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i) => `태그 ${i + 1}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">태그</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-md border p-4 w-[150px] h-[150px] flex items-center justify-center"
          >
            아이템 {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
