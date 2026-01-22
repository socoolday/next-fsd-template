import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./Dialog";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Label } from "../label";

/**
 * Dialog 컴포넌트는 모달 형태의 대화상자를 표시합니다.
 */
const meta: Meta<typeof Dialog> = {
  title: "shared/ui/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "모달 형태로 사용자에게 정보를 표시하거나 입력을 받는 대화상자 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * 기본 대화상자
 */
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">대화상자 열기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            프로필 정보를 수정하세요. 완료되면 저장을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input id="name" defaultValue="홍길동" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              사용자명
            </Label>
            <Input id="username" defaultValue="@hong" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 확인 대화상자
 */
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">삭제</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>삭제 확인</DialogTitle>
          <DialogDescription>
            정말로 이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button variant="destructive">삭제</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 알림 대화상자
 */
export const Alert: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>알림 보기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            작업이 성공적으로 완료되었습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 긴 콘텐츠가 있는 대화상자
 */
export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">이용약관 보기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>이용약관</DialogTitle>
          <DialogDescription>
            서비스 이용에 관한 약관입니다.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[50vh] py-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              제1조 (목적) 이 약관은 회사가 제공하는 서비스의 이용조건 및 절차,
              회사와 회원 간의 권리, 의무 및 책임사항과 기타 필요한 사항을
              규정함을 목적으로 합니다.
            </p>
            <p>
              제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              1. &quot;서비스&quot;란 회사가 제공하는 모든 서비스를 말합니다. 2.
              &quot;회원&quot;이란 회사와 서비스 이용계약을 체결한 자를 말합니다.
            </p>
            <p>
              제3조 (약관의 효력 및 변경) 1. 이 약관은 서비스를 이용하고자 하는
              모든 회원에게 적용됩니다. 2. 회사는 필요한 경우 관련법령을 위배하지
              않는 범위에서 이 약관을 변경할 수 있습니다.
            </p>
            <p>
              제4조 (서비스의 제공 및 변경) 1. 회사는 다음과 같은 서비스를
              제공합니다. 2. 회사는 필요한 경우 서비스의 내용을 변경할 수
              있습니다.
            </p>
            <p>
              제5조 (서비스 이용시간) 1. 서비스 이용시간은 회사의 업무상 또는
              기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로
              합니다.
            </p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
          <Button>동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 배경 오버레이 없는 대화상자
 * showOverlay={false}로 배경 검은색 오버레이를 제거합니다.
 */
export const NoOverlay: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">오버레이 없는 대화상자</Button>
      </DialogTrigger>
      <DialogContent showOverlay={false} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>배경 없는 대화상자</DialogTitle>
          <DialogDescription>
            배경 오버레이가 없어 뒤쪽 콘텐츠가 보입니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            이 대화상자는 배경 검은색 오버레이가 없습니다.
            뒤쪽 콘텐츠와 상호작용할 수 있습니다.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 닫기 버튼 없는 대화상자
 * showCloseButton={false}로 우측 상단 닫기 버튼을 제거합니다.
 */
export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">닫기 버튼 없는 대화상자</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>닫기 버튼 없음</DialogTitle>
          <DialogDescription>
            우측 상단에 닫기(X) 버튼이 없습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            이 대화상자는 푸터의 버튼이나 ESC 키로만 닫을 수 있습니다.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * 미니멀 대화상자 (오버레이 + 닫기 버튼 없음)
 */
export const Minimal: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">미니멀 대화상자</Button>
      </DialogTrigger>
      <DialogContent 
        showOverlay={false} 
        showCloseButton={false} 
        className="sm:max-w-[350px]"
      >
        <DialogHeader>
          <DialogTitle>미니멀 스타일</DialogTitle>
          <DialogDescription>
            오버레이와 닫기 버튼이 모두 없는 깔끔한 스타일입니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
