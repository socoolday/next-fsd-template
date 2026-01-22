import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { Label } from "@/shared/ui/label";
import { Icon } from "@/shared/ui/icon";

/**
 * Select 컴포넌트는 드롭다운 형태의 선택 목록을 제공합니다.
 */
const meta: Meta<typeof Select> = {
  title: "shared/ui/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "드롭다운 형태로 옵션을 선택할 수 있는 Select 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Select
 */
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
        <SelectItem value="orange">오렌지</SelectItem>
        <SelectItem value="grape">포도</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 그룹화된 옵션
 */
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="과일 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>국내 과일</SelectLabel>
          <SelectItem value="apple">사과</SelectItem>
          <SelectItem value="pear">배</SelectItem>
          <SelectItem value="peach">복숭아</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>수입 과일</SelectLabel>
          <SelectItem value="banana">바나나</SelectItem>
          <SelectItem value="mango">망고</SelectItem>
          <SelectItem value="kiwi">키위</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * 비활성화된 Select
 */
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="비활성화됨" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 비활성화된 옵션
 */
export const DisabledOption: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="옵션 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="available1">사용 가능 1</SelectItem>
        <SelectItem value="available2">사용 가능 2</SelectItem>
        <SelectItem value="unavailable" disabled>
          사용 불가 (품절)
        </SelectItem>
        <SelectItem value="available3">사용 가능 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 레이블과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="framework">프레임워크</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="프레임워크 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

/**
 * 에러 상태
 */
export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-select">필수 선택</Label>
      <Select>
        <SelectTrigger id="error-select" className="border-red-500 focus:ring-red-500">
          <SelectValue placeholder="옵션을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">옵션 1</SelectItem>
          <SelectItem value="option2">옵션 2</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-red-500">필수 항목입니다.</p>
    </div>
  ),
};

/**
 * 타임존 선택 예시
 */
export const TimezoneExample: Story = {
  render: () => (
    <Select defaultValue="kst">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="타임존 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>아시아</SelectLabel>
          <SelectItem value="kst">한국 표준시 (KST) UTC+9</SelectItem>
          <SelectItem value="jst">일본 표준시 (JST) UTC+9</SelectItem>
          <SelectItem value="cst">중국 표준시 (CST) UTC+8</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>미주</SelectLabel>
          <SelectItem value="pst">태평양 표준시 (PST) UTC-8</SelectItem>
          <SelectItem value="est">동부 표준시 (EST) UTC-5</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>유럽</SelectLabel>
          <SelectItem value="gmt">그리니치 평균시 (GMT) UTC+0</SelectItem>
          <SelectItem value="cet">중앙 유럽 시간 (CET) UTC+1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * 언어 선택
 */
export const LanguageSelect: Story = {
  render: () => (
    <Select defaultValue="ko">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="언어 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">🇰🇷 한국어</SelectItem>
        <SelectItem value="en">🇺🇸 English</SelectItem>
        <SelectItem value="ja">🇯🇵 日本語</SelectItem>
        <SelectItem value="zh">🇨🇳 中文</SelectItem>
        <SelectItem value="es">🇪🇸 Español</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 크기 변형
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger className="w-[150px] h-8 text-xs">
          <SelectValue placeholder="작음" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1" className="text-xs">옵션 1</SelectItem>
          <SelectItem value="2" className="text-xs">옵션 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="기본" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">옵션 1</SelectItem>
          <SelectItem value="2">옵션 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[250px] h-12 text-lg">
          <SelectValue placeholder="큼" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1" className="text-lg py-3">옵션 1</SelectItem>
          <SelectItem value="2" className="text-lg py-3">옵션 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

/**
 * 상태 선택 (색상 포함)
 */
export const StatusSelect: Story = {
  render: () => (
    <Select defaultValue="active">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="상태 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            활성
          </div>
        </SelectItem>
        <SelectItem value="pending">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            대기중
          </div>
        </SelectItem>
        <SelectItem value="inactive">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-400" />
            비활성
          </div>
        </SelectItem>
        <SelectItem value="error">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            오류
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 우선순위 선택
 */
export const PrioritySelect: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="우선순위 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="urgent">
          <div className="flex items-center gap-2 text-red-600">
            <Icon name="TriangleAlert" className="h-4 w-4" />
            긴급
          </div>
        </SelectItem>
        <SelectItem value="high">
          <div className="flex items-center gap-2 text-orange-500">
            <Icon name="ArrowUp" className="h-4 w-4" />
            높음
          </div>
        </SelectItem>
        <SelectItem value="medium">
          <div className="flex items-center gap-2 text-blue-500">
            <Icon name="Minus" className="h-4 w-4" />
            보통
          </div>
        </SelectItem>
        <SelectItem value="low">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="ArrowDown" className="h-4 w-4" />
            낮음
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 폼 내 여러 Select
 */
export const MultipleSelects: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <div className="space-y-1.5">
        <Label>국가</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kr">대한민국</SelectItem>
            <SelectItem value="us">미국</SelectItem>
            <SelectItem value="jp">일본</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>도시</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seoul">서울</SelectItem>
            <SelectItem value="busan">부산</SelectItem>
            <SelectItem value="daegu">대구</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

/**
 * 정렬 옵션
 */
export const SortSelect: Story = {
  render: () => (
    <Select defaultValue="latest">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">
          <div className="flex items-center gap-2">
            <Icon name="Clock" className="h-4 w-4" />
            최신순
          </div>
        </SelectItem>
        <SelectItem value="oldest">
          <div className="flex items-center gap-2">
            <Icon name="History" className="h-4 w-4" />
            오래된순
          </div>
        </SelectItem>
        <SelectItem value="popular">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" className="h-4 w-4" />
            인기순
          </div>
        </SelectItem>
        <SelectItem value="name">
          <div className="flex items-center gap-2">
            <Icon name="ArrowDownAZ" className="h-4 w-4" />
            이름순
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 테마 선택
 */
export const ThemeSelect: Story = {
  render: () => (
    <Select defaultValue="system">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="테마 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <div className="flex items-center gap-2">
            <Icon name="Sun" className="h-4 w-4" />
            라이트
          </div>
        </SelectItem>
        <SelectItem value="dark">
          <div className="flex items-center gap-2">
            <Icon name="Moon" className="h-4 w-4" />
            다크
          </div>
        </SelectItem>
        <SelectItem value="system">
          <div className="flex items-center gap-2">
            <Icon name="Monitor" className="h-4 w-4" />
            시스템
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};
