"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Checkbox,
  Switch,
  Label,
  Separator,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeToggle,
  ThemeColorPicker,
  Icon,
} from "@/shared/ui";

/**
 * 메인 데모 페이지
 * 모든 UI 컴포넌트와 테마 시스템을 확인할 수 있습니다.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Boxes" className="h-6 w-6 text-primary" />
            <span className="font-bold">Next.js FSD Template</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ThemeColorPicker />
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8">
        {/* 히어로 섹션 */}
        <section className="mb-12 text-center">
          <Badge className="mb-4">v1.0.0</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Next.js 15 + FSD
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Feature-Sliced Design 아키텍처 기반의 Next.js 15 템플릿입니다.
            <br />
            다크/라이트 모드와 다양한 테마 색상을 지원합니다.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button>
              <Icon name="Github" className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline">
              <Icon name="BookOpen" className="mr-2 h-4 w-4" />
              문서 보기
            </Button>
          </div>
        </section>

        <Separator className="my-8" />

        {/* 컴포넌트 데모 섹션 */}
        <section className="space-y-12">
          {/* 버튼 섹션 */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  다양한 스타일의 버튼 컴포넌트입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Icon name="Plus" className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* 폼 요소 섹션 */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Form Elements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input & Select</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="framework">프레임워크</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="remix">Remix</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Checkbox & Switch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">이용약관에 동의합니다</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">뉴스레터 구독</Label>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">알림 허용</Label>
                    <Switch id="notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="darkmode">다크 모드</Label>
                    <Switch id="darkmode" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 배지 & 아바타 섹션 */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Badge & Avatar</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <div className="flex -space-x-4">
                    <Avatar className="border-2 border-background">
                      <AvatarFallback>+5</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 탭 섹션 */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Tabs</h2>
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">개요</TabsTrigger>
                    <TabsTrigger value="analytics">분석</TabsTrigger>
                    <TabsTrigger value="reports">리포트</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">개요</h3>
                      <p className="text-sm text-muted-foreground">
                        프로젝트의 전체적인 현황을 확인할 수 있습니다.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="analytics" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">분석</h3>
                      <p className="text-sm text-muted-foreground">
                        상세한 분석 데이터를 확인할 수 있습니다.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="reports" className="mt-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">리포트</h3>
                      <p className="text-sm text-muted-foreground">
                        생성된 리포트를 확인할 수 있습니다.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* 테마 색상 프리뷰 */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Theme Colors</h2>
            <Card>
              <CardHeader>
                <CardTitle>테마 색상 미리보기</CardTitle>
                <CardDescription>
                  상단의 팔레트 아이콘을 클릭하여 다양한 테마 색상을 적용해 보세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-primary" />
                    <p className="text-center text-xs">Primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-secondary" />
                    <p className="text-center text-xs">Secondary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-accent" />
                    <p className="text-center text-xs">Accent</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-lg bg-muted" />
                    <p className="text-center text-xs">Muted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              className="font-medium text-primary hover:underline"
            >
              Next.js 15
            </a>{" "}
            +{" "}
            <a
              href="https://feature-sliced.design"
              className="font-medium text-primary hover:underline"
            >
              Feature-Sliced Design
            </a>{" "}
            +{" "}
            <a
              href="https://ui.shadcn.com"
              className="font-medium text-primary hover:underline"
            >
              shadcn/ui
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
