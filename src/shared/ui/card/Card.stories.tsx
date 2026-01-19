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
import { Badge } from "@/shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Progress } from "@/shared/ui/progress";
import { Icon } from "@/shared/ui/icon";

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
 * 프로필 카드
 */
export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>홍길동</CardTitle>
          <CardDescription>프론트엔드 개발자</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          React, TypeScript, Next.js를 활용한 웹 개발을 전문으로 합니다.
        </p>
        <div className="mt-4 flex gap-2">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Next.js</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">
          <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
          메시지
        </Button>
        <Button variant="outline" className="flex-1">
          <Icon name="UserPlus" className="mr-2 h-4 w-4" />
          팔로우
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * 통계 카드
 */
export const StatCard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">총 매출</CardTitle>
          <Icon name="DollarSign" className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₩45,231,890</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">+20.1%</span> 지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">구독자</CardTitle>
          <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">+180.1%</span> 지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">판매량</CardTitle>
          <Icon name="CreditCard" className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500">+19%</span> 지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
          <Icon name="Activity" className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500">-2%</span> 지난 달 대비
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

/**
 * 프로젝트 진행 카드
 */
export const ProjectProgress: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>웹사이트 리뉴얼</CardTitle>
          <Badge>진행중</Badge>
        </div>
        <CardDescription>디자인 시스템 구축 및 프론트엔드 개발</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>전체 진행률</span>
            <span className="text-muted-foreground">68%</span>
          </div>
          <Progress value={68} />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Icon name="CheckCircle2" className="h-4 w-4 text-green-500" />
            <span>17 완료</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" className="h-4 w-4 text-yellow-500" />
            <span>5 진행중</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Circle" className="h-4 w-4 text-muted-foreground" />
            <span>3 대기</span>
          </div>
        </div>
        <div className="flex -space-x-2">
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarFallback className="text-xs">+2</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          상세 보기
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * 제품 카드
 */
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <div className="relative h-[200px] bg-muted">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product"
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2">신상품</Badge>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">무선 이어폰</CardTitle>
          <div className="flex items-center gap-1">
            <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.8</span>
          </div>
        </div>
        <CardDescription>노이즈 캔슬링 블루투스 이어폰</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">₩89,000</span>
          <span className="text-sm text-muted-foreground line-through">₩129,000</span>
          <Badge variant="destructive" className="text-xs">31% OFF</Badge>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">
          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
          장바구니
        </Button>
        <Button variant="outline" size="icon">
          <Icon name="Heart" className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * 가격 플랜 카드
 */
export const PricingCard: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[280px]">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>개인 사용자를 위한 플랜</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold">
            ₩9,900<span className="text-sm font-normal text-muted-foreground">/월</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              프로젝트 3개
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              1GB 저장공간
            </li>
            <li className="flex items-center gap-2">
              <Icon name="X" className="h-4 w-4 text-muted-foreground" />
              팀 협업
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">선택하기</Button>
        </CardFooter>
      </Card>
      <Card className="w-[280px] border-primary">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Pro</CardTitle>
            <Badge>인기</Badge>
          </div>
          <CardDescription>팀을 위한 플랜</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold">
            ₩29,900<span className="text-sm font-normal text-muted-foreground">/월</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              무제한 프로젝트
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              50GB 저장공간
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              팀 협업
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">선택하기</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

/**
 * 호버 효과 카드
 */
export const HoverEffect: Story = {
  render: () => (
    <Card className="w-[350px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Zap" className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>빠른 성능</CardTitle>
            <CardDescription>최적화된 성능을 경험하세요</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          최신 기술을 활용하여 빠르고 안정적인 서비스를 제공합니다.
        </p>
      </CardContent>
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

/**
 * 액션 카드
 */
export const ActionCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>할 일 목록</CardTitle>
          <Button variant="ghost" size="icon">
            <Icon name="MoreHorizontal" className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {["디자인 검토", "코드 리뷰", "문서 작성"].map((task, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
            <div className="flex items-center gap-2">
              <Icon name="Circle" className="h-4 w-4 text-muted-foreground" />
              <span>{task}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Icon name="Trash2" className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          새 할 일 추가
        </Button>
      </CardFooter>
    </Card>
  ),
};
