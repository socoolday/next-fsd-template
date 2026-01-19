import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
} from "./DropdownMenu";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import React from "react";

/**
 * DropdownMenu 컴포넌트는 클릭 시 메뉴 목록을 표시합니다.
 */
const meta: Meta<typeof DropdownMenu> = {
  title: "shared/ui/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "클릭 시 메뉴 목록을 표시하는 드롭다운 메뉴 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 드롭다운 메뉴
 */
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">메뉴 열기</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="User" className="mr-2 h-4 w-4" />
          <span>프로필</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="Settings" className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="Bell" className="mr-2 h-4 w-4" />
          <span>알림</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="LogOut" className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * 단축키가 있는 메뉴
 */
export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">파일</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon name="File" className="mr-2 h-4 w-4" />
          <span>새 파일</span>
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="FolderOpen" className="mr-2 h-4 w-4" />
          <span>열기</span>
          <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="Save" className="mr-2 h-4 w-4" />
          <span>저장</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Icon name="Printer" className="mr-2 h-4 w-4" />
          <span>인쇄</span>
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * 체크박스 메뉴
 */
export const WithCheckbox: Story = {
  render: function CheckboxStory() {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">보기 설정</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 표시</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            상태 바
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            활동 바
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            패널
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

/**
 * 라디오 그룹 메뉴
 */
export const WithRadioGroup: Story = {
  render: function RadioStory() {
    const [position, setPosition] = React.useState("bottom");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">패널 위치</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 위치 선택</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">위쪽</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">아래쪽</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">오른쪽</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

/**
 * 서브 메뉴
 */
export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">더보기</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon name="UserPlus" className="mr-2 h-4 w-4" />
          <span>새 팀원 초대</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon name="Share2" className="mr-2 h-4 w-4" />
            <span>공유하기</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Icon name="Mail" className="mr-2 h-4 w-4" />
              <span>이메일</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
              <span>메시지</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="Link" className="mr-2 h-4 w-4" />
              <span>링크 복사</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="Trash2" className="mr-2 h-4 w-4" />
          <span>삭제</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
