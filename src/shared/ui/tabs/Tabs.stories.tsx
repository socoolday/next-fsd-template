import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";

/**
 * Tabs 컴포넌트는 콘텐츠를 탭으로 구분하여 표시합니다.
 */
const meta: Meta<typeof Tabs> = {
  title: "shared/ui/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "콘텐츠를 탭으로 구분하여 표시하는 탭 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 탭
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>계정</CardTitle>
            <CardDescription>
              계정 정보를 수정하세요. 저장을 클릭하면 변경됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="홍길동" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">사용자명</Label>
              <Input id="username" defaultValue="@hong" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호</CardTitle>
            <CardDescription>
              비밀번호를 변경하세요. 저장 후 로그아웃됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">현재 비밀번호</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">새 비밀번호</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 심플 탭
 */
export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
        <TabsTrigger value="tab3">탭 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4 border rounded-lg mt-2">
        첫 번째 탭의 내용입니다.
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-lg mt-2">
        두 번째 탭의 내용입니다.
      </TabsContent>
      <TabsContent value="tab3" className="p-4 border rounded-lg mt-2">
        세 번째 탭의 내용입니다.
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 비활성화된 탭
 */
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">개요</TabsTrigger>
        <TabsTrigger value="analytics">분석</TabsTrigger>
        <TabsTrigger value="reports" disabled>
          리포트 (준비 중)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 border rounded-lg mt-2">
        개요 내용입니다.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 border rounded-lg mt-2">
        분석 내용입니다.
      </TabsContent>
    </Tabs>
  ),
};
