import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ContextMenu";

const meta: Meta<typeof ContextMenu> = {
  title: "shared/ui/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "마우스 우클릭 시 나타나는 컨텍스트 메뉴 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Context Menu
 */
export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        우클릭 하세요
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          뒤로 가기
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          앞으로 가기
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          새로고침
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>더 보기</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              저장하기
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              이름 바꾸기
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>개발자 도구</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          소스 보기
          <ContextMenuShortcut>⌘U</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

/**
 * 체크박스 아이템
 */
export const WithCheckbox: Story = {
  render: function CheckboxContextMenu() {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          우클릭 하세요
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel inset>보기 설정</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            상태바
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            활동바
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            패널
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * 라디오 그룹
 */
export const WithRadioGroup: Story = {
  render: function RadioContextMenu() {
    const [person, setPerson] = useState("pedro");

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          우클릭 하세요
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel inset>사용자 선택</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="john">
              John Doe
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
