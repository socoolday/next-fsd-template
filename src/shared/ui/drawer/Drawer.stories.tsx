import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "shared/ui/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "모바일 친화적인 하단에서 올라오는 드로어 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/**
 * 기본 Drawer
 */
export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>편집하기</DrawerTitle>
          <DrawerDescription>
            프로필 정보를 수정할 수 있습니다.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>저장</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * 간단한 내용
 */
export const Simple: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>메뉴 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>메뉴</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            홈
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            프로필
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            설정
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            로그아웃
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * 확인 다이얼로그
 */
export const Confirmation: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">삭제하기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>정말 삭제하시겠습니까?</DrawerTitle>
          <DrawerDescription>
            이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="destructive">삭제</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

/**
 * 제어된 상태
 */
export const Controlled: Story = {
  render: function ControlledDrawer() {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          현재 상태: {open ? "열림" : "닫힘"}
        </p>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">제어된 Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>제어된 Drawer</DrawerTitle>
              <DrawerDescription>
                상태를 직접 제어할 수 있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => setOpen(false)}>닫기</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
