import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "./Sheet";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

const meta: Meta<typeof Sheet> = {
  title: "shared/ui/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "화면 측면에서 슬라이드되는 Sheet 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">오른쪽에서 열기</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>프로필 수정</SheetTitle>
          <SheetDescription>
            프로필 정보를 변경하세요. 완료되면 저장을 클릭하세요.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input id="name" value="홍길동" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              사용자명
            </Label>
            <Input id="username" value="@hong" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">저장</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">왼쪽에서 열기</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>네비게이션</SheetTitle>
          <SheetDescription>메뉴를 선택하세요.</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 py-4">
          <Button variant="ghost" className="justify-start">
            홈
          </Button>
          <Button variant="ghost" className="justify-start">
            대시보드
          </Button>
          <Button variant="ghost" className="justify-start">
            설정
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">위에서 열기</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>공지사항</SheetTitle>
          <SheetDescription>
            새로운 기능이 추가되었습니다. 지금 확인해보세요!
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">아래에서 열기</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>필터</SheetTitle>
          <SheetDescription>검색 결과를 필터링하세요.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
