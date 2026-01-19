import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./Command";

const meta: Meta<typeof Command> = {
  title: "shared/ui/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "검색 및 명령 팔레트 컴포넌트입니다. Cmd+K 스타일의 명령 메뉴를 구현할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Command
 */
export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="검색어를 입력하세요..." />
      <CommandList>
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="제안">
          <CommandItem>
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            <span>캘린더</span>
          </CommandItem>
          <CommandItem>
            <Icon name="Smile" className="mr-2 h-4 w-4" />
            <span>이모지 검색</span>
          </CommandItem>
          <CommandItem>
            <Icon name="Calculator" className="mr-2 h-4 w-4" />
            <span>계산기</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="설정">
          <CommandItem>
            <Icon name="User" className="mr-2 h-4 w-4" />
            <span>프로필</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Icon name="CreditCard" className="mr-2 h-4 w-4" />
            <span>결제 정보</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Icon name="Settings" className="mr-2 h-4 w-4" />
            <span>설정</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

/**
 * Dialog 형태
 */
export const Dialog: Story = {
  render: function DialogCommand() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <p className="text-sm text-muted-foreground mb-4">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
          를 눌러서 열 수도 있습니다.
        </p>
        <Button onClick={() => setOpen(true)}>Command Palette 열기</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="명령어 검색..." />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            <CommandGroup heading="제안">
              <CommandItem>
                <Icon name="Calendar" className="mr-2 h-4 w-4" />
                <span>캘린더</span>
              </CommandItem>
              <CommandItem>
                <Icon name="Smile" className="mr-2 h-4 w-4" />
                <span>이모지 검색</span>
              </CommandItem>
              <CommandItem>
                <Icon name="Calculator" className="mr-2 h-4 w-4" />
                <span>계산기</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="설정">
              <CommandItem>
                <Icon name="User" className="mr-2 h-4 w-4" />
                <span>프로필</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                <span>설정</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

/**
 * 비활성화된 아이템
 */
export const WithDisabled: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="검색어를 입력하세요..." />
      <CommandList>
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="메뉴">
          <CommandItem>
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            <span>캘린더</span>
          </CommandItem>
          <CommandItem disabled>
            <Icon name="Smile" className="mr-2 h-4 w-4" />
            <span>이모지 (비활성화)</span>
          </CommandItem>
          <CommandItem>
            <Icon name="Calculator" className="mr-2 h-4 w-4" />
            <span>계산기</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
