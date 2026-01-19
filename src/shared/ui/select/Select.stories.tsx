import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { Label } from "@/shared/ui/label";

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
          <SelectItem value="kst">한국 표준시 (KST)</SelectItem>
          <SelectItem value="jst">일본 표준시 (JST)</SelectItem>
          <SelectItem value="cst">중국 표준시 (CST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>미주</SelectLabel>
          <SelectItem value="pst">태평양 표준시 (PST)</SelectItem>
          <SelectItem value="est">동부 표준시 (EST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>유럽</SelectLabel>
          <SelectItem value="gmt">그리니치 평균시 (GMT)</SelectItem>
          <SelectItem value="cet">중앙 유럽 시간 (CET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
