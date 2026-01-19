import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

/**
 * Card 컴포넌트는 관련 콘텐츠를 그룹화하여 표시하는 컨테이너입니다.
 */
const meta: Meta<typeof Card> = {
  title: "shared/ui/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Header, Content, Footer 영역으로 구성된 카드 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 카드
 */
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드에 대한 설명이 들어갑니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 내용이 여기에 표시됩니다.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">카드 푸터</p>
      </CardFooter>
    </Card>
  ),
};

/**
 * 로그인 폼 카드
 */
export const LoginForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>계정에 로그인하세요</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" placeholder="이메일을 입력하세요" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>로그인</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * 알림 카드
 */
export const Notification: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>알림</CardTitle>
        <CardDescription>새로운 알림이 3개 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-primary mt-2" />
          <div className="space-y-1">
            <p className="text-sm font-medium">새 메시지가 도착했습니다</p>
            <p className="text-sm text-muted-foreground">2분 전</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg border p-4">
          <div className="h-2 w-2 rounded-full bg-primary mt-2" />
          <div className="space-y-1">
            <p className="text-sm font-medium">업데이트가 완료되었습니다</p>
            <p className="text-sm text-muted-foreground">1시간 전</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          모든 알림 보기
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * 심플 카드 (헤더만)
 */
export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>간단한 카드</CardTitle>
        <CardDescription>헤더만 있는 심플한 카드입니다.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

/**
 * 컨텐츠만 있는 카드
 */
export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>컨텐츠만 있는 카드입니다. 심플한 정보 표시에 적합합니다.</p>
      </CardContent>
    </Card>
  ),
};
