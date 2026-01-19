import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "shared/ui/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "로딩 중 콘텐츠 placeholder를 표시하는 Skeleton 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Skeleton
 */
export const Default: Story = {
  args: {
    className: "h-4 w-[250px]",
  },
};

/**
 * 텍스트 라인
 */
export const TextLines: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[75%]" />
    </div>
  ),
};

/**
 * 프로필 카드
 */
export const ProfileCard: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
};

/**
 * 이미지가 있는 카드
 */
export const CardWithImage: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-4 space-y-4">
      <Skeleton className="h-[180px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[80%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  ),
};

/**
 * 리스트 아이템
 */
export const ListItems: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-3 w-[50%]" />
          </div>
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      ))}
    </div>
  ),
};

/**
 * 테이블
 */
export const Table: Story = {
  render: () => (
    <div className="w-[500px] space-y-3">
      {/* Header */}
      <div className="flex gap-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      {/* Rows */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  ),
};

/**
 * 폼
 */
export const Form: Story = {
  render: () => (
    <div className="w-[350px] space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[60px]" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-24 w-full rounded-md" />
      </div>
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  ),
};

/**
 * 네비게이션 / 사이드바
 */
export const Sidebar: Story = {
  render: () => (
    <div className="w-[250px] space-y-4 p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
      </div>
      <div className="border-t pt-4 space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * 대시보드 카드
 */
export const DashboardCards: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-4 border rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-6 w-6 rounded" />
          </div>
          <Skeleton className="h-8 w-[100px]" />
          <Skeleton className="h-3 w-[60px]" />
        </div>
      ))}
    </div>
  ),
};

/**
 * 미디어 그리드
 */
export const MediaGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2 w-[300px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Skeleton key={i} className="aspect-square rounded-md" />
      ))}
    </div>
  ),
};

/**
 * 채팅 메시지
 */
export const ChatMessages: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      {/* 받은 메시지 */}
      <div className="flex gap-3">
        <Skeleton className="h-8 w-8 rounded-full shrink-0" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-16 w-[200px] rounded-lg" />
        </div>
      </div>
      {/* 보낸 메시지 */}
      <div className="flex gap-3 justify-end">
        <Skeleton className="h-12 w-[180px] rounded-lg" />
      </div>
      {/* 받은 메시지 */}
      <div className="flex gap-3">
        <Skeleton className="h-8 w-8 rounded-full shrink-0" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-24 w-[220px] rounded-lg" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 댓글
 */
export const Comments: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="h-10 w-10 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-3 w-[60px]" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <div className="flex gap-4 pt-1">
              <Skeleton className="h-3 w-[40px]" />
              <Skeleton className="h-3 w-[40px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * 통계 차트
 */
export const ChartArea: Story = {
  render: () => (
    <div className="w-[400px] p-4 border rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-[120px]" />
        <Skeleton className="h-8 w-[100px] rounded-md" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-md" />
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-[50px]" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-[50px]" />
        </div>
      </div>
    </div>
  ),
};
