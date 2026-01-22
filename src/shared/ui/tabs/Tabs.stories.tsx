import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Icon } from "@/shared/ui/icon";

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

/**
 * 아이콘이 있는 탭
 */
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[450px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="music" className="gap-2">
          <Icon name="Music" className="h-4 w-4" />
          <span className="hidden sm:inline">음악</span>
        </TabsTrigger>
        <TabsTrigger value="podcasts" className="gap-2">
          <Icon name="Podcast" className="h-4 w-4" />
          <span className="hidden sm:inline">팟캐스트</span>
        </TabsTrigger>
        <TabsTrigger value="live" className="gap-2">
          <Icon name="Radio" className="h-4 w-4" />
          <span className="hidden sm:inline">라이브</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="gap-2">
          <Icon name="Settings" className="h-4 w-4" />
          <span className="hidden sm:inline">설정</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="p-4 border rounded-lg mt-2">
        <h3 className="font-semibold mb-2">음악 라이브러리</h3>
        <p className="text-sm text-muted-foreground">저장된 음악을 관리합니다.</p>
      </TabsContent>
      <TabsContent value="podcasts" className="p-4 border rounded-lg mt-2">
        <h3 className="font-semibold mb-2">팟캐스트</h3>
        <p className="text-sm text-muted-foreground">구독 중인 팟캐스트를 확인합니다.</p>
      </TabsContent>
      <TabsContent value="live" className="p-4 border rounded-lg mt-2">
        <h3 className="font-semibold mb-2">라이브</h3>
        <p className="text-sm text-muted-foreground">실시간 스트리밍을 시청합니다.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
        <h3 className="font-semibold mb-2">설정</h3>
        <p className="text-sm text-muted-foreground">앱 설정을 관리합니다.</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 배지가 있는 탭
 */
export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="inbox" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="inbox" className="gap-2">
          받은편지함
          <Badge className="ml-1.5 h-5 px-1.5">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="sent">보낸편지함</TabsTrigger>
        <TabsTrigger value="spam" className="gap-2">
          스팸
          <Badge variant="destructive" className="ml-1.5 h-5 px-1.5">3</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox" className="p-4 border rounded-lg mt-2">
        12개의 새 메시지가 있습니다.
      </TabsContent>
      <TabsContent value="sent" className="p-4 border rounded-lg mt-2">
        보낸 메시지 목록입니다.
      </TabsContent>
      <TabsContent value="spam" className="p-4 border rounded-lg mt-2">
        3개의 스팸 메시지가 있습니다.
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 세로 탭
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex gap-4 w-[500px]">
      <Tabs defaultValue="general" orientation="vertical" className="flex">
        <TabsList className="flex-col h-auto">
          <TabsTrigger value="general" className="justify-start w-full">
            <Icon name="Settings" className="mr-2 h-4 w-4" />
            일반
          </TabsTrigger>
          <TabsTrigger value="security" className="justify-start w-full">
            <Icon name="Shield" className="mr-2 h-4 w-4" />
            보안
          </TabsTrigger>
          <TabsTrigger value="notifications" className="justify-start w-full">
            <Icon name="Bell" className="mr-2 h-4 w-4" />
            알림
          </TabsTrigger>
          <TabsTrigger value="billing" className="justify-start w-full">
            <Icon name="CreditCard" className="mr-2 h-4 w-4" />
            결제
          </TabsTrigger>
        </TabsList>
        <div className="ml-4 flex-1">
          <TabsContent value="general" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>일반 설정</CardTitle>
                <CardDescription>기본 설정을 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  여기에 일반 설정 내용이 들어갑니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>보안 설정</CardTitle>
                <CardDescription>보안 옵션을 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  여기에 보안 설정 내용이 들어갑니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>알림 설정</CardTitle>
                <CardDescription>알림 옵션을 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  여기에 알림 설정 내용이 들어갑니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>결제 설정</CardTitle>
                <CardDescription>결제 정보를 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  여기에 결제 설정 내용이 들어갑니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
};

/**
 * 전체 너비 탭
 */
export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="w-full">
        <TabsTrigger value="overview" className="flex-1">개요</TabsTrigger>
        <TabsTrigger value="analytics" className="flex-1">분석</TabsTrigger>
        <TabsTrigger value="reports" className="flex-1">리포트</TabsTrigger>
        <TabsTrigger value="settings" className="flex-1">설정</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 border rounded-lg mt-2">
        개요 내용입니다.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 border rounded-lg mt-2">
        분석 내용입니다.
      </TabsContent>
      <TabsContent value="reports" className="p-4 border rounded-lg mt-2">
        리포트 내용입니다.
      </TabsContent>
      <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
        설정 내용입니다.
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 코드 탭 (프로그래밍 언어 선택)
 */
export const CodeTabs: Story = {
  render: () => (
    <Tabs defaultValue="javascript" className="w-[450px]">
      <TabsList>
        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="javascript">
        <pre className="p-4 bg-muted rounded-lg mt-2 text-sm overflow-auto">
          <code>{`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`}</code>
        </pre>
      </TabsContent>
      <TabsContent value="typescript">
        <pre className="p-4 bg-muted rounded-lg mt-2 text-sm overflow-auto">
          <code>{`function greet(name: string): void {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`}</code>
        </pre>
      </TabsContent>
      <TabsContent value="python">
        <pre className="p-4 bg-muted rounded-lg mt-2 text-sm overflow-auto">
          <code>{`def greet(name):
    print(f"Hello, {name}!")

greet("World")`}</code>
        </pre>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * 프로젝트 탭
 */
export const ProjectTabs: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-[500px]">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="active">진행중</TabsTrigger>
          <TabsTrigger value="completed">완료</TabsTrigger>
          <TabsTrigger value="archived">보관</TabsTrigger>
        </TabsList>
        <Button size="sm">
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          새 프로젝트
        </Button>
      </div>
      <TabsContent value="all" className="mt-4 space-y-4">
        {[
          { name: "웹사이트 리뉴얼", status: "진행중" },
          { name: "모바일 앱 개발", status: "완료" },
          { name: "API 문서화", status: "진행중" },
        ].map((project) => (
          <Card key={project.name}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium">{project.name}</div>
                <Badge variant={project.status === "완료" ? "secondary" : "default"} className="mt-1">
                  {project.status}
                </Badge>
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="Ellipsis" className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="active" className="mt-4">
        <p className="text-sm text-muted-foreground">진행 중인 프로젝트가 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="completed" className="mt-4">
        <p className="text-sm text-muted-foreground">완료된 프로젝트가 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="archived" className="mt-4">
        <p className="text-sm text-muted-foreground">보관된 프로젝트가 표시됩니다.</p>
      </TabsContent>
    </Tabs>
  ),
};
