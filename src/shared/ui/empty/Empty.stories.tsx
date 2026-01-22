import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Empty } from "./Empty";
import { Button } from "../button";
import { Card, CardContent } from "../card";
import { IconName } from "../icon";

/**
 * Empty 컴포넌트는 데이터가 없을 때 표시하는 빈 상태 컴포넌트입니다.
 */
const meta: Meta<typeof Empty> = {
  title: "shared/ui/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "아이콘, 제목, 설명, 액션 버튼을 포함하는 빈 상태 컴포넌트입니다. 다양한 크기와 스타일을 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Empty 컴포넌트 크기",
    },
    icon: {
      control: "text",
      description: "아이콘 이름 (lucide-react)",
    },
    title: {
      control: "text",
      description: "제목",
    },
    description: {
      control: "text",
      description: "설명",
    },
    showIcon: {
      control: "boolean",
      description: "아이콘 표시 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

/**
 * 기본 Empty 상태
 */
export const Default: Story = {
  args: {
    icon: "Inbox",
    title: "데이터가 없습니다",
    description: "새로운 항목을 추가해보세요.",
  },
};

/**
 * 액션 버튼 포함
 */
export const WithAction: Story = {
  args: {
    icon: "Inbox",
    title: "데이터가 없습니다",
    description: "새로운 항목을 추가해보세요.",
    action: <Button>추가하기</Button>,
  },
};

/**
 * 작은 크기
 */
export const Small: Story = {
  args: {
    size: "sm",
    icon: "Inbox",
    title: "데이터가 없습니다",
    description: "새로운 항목을 추가해보세요.",
  },
};

/**
 * 큰 크기
 */
export const Large: Story = {
  args: {
    size: "lg",
    icon: "Inbox",
    title: "데이터가 없습니다",
    description: "새로운 항목을 추가해보세요.",
    action: <Button size="lg">추가하기</Button>,
  },
};

/**
 * 아이콘 없음
 */
export const NoIcon: Story = {
  args: {
    showIcon: false,
    title: "데이터가 없습니다",
    description: "새로운 항목을 추가해보세요.",
    action: <Button variant="outline">추가하기</Button>,
  },
};

/**
 * 다양한 아이콘
 */
export const DifferentIcons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <Empty
        icon="Inbox"
        title="받은 편지함이 비어있습니다"
        description="새로운 메시지가 없습니다."
      />
      <Empty
        icon="Search"
        title="검색 결과가 없습니다"
        description="다른 검색어를 시도해보세요."
      />
      <Empty
        icon="FileText"
        title="문서가 없습니다"
        description="새 문서를 생성해보세요."
        action={<Button>문서 생성</Button>}
      />
      <Empty
        icon="Users"
        title="멤버가 없습니다"
        description="팀에 멤버를 초대해보세요."
        action={<Button>멤버 초대</Button>}
      />
    </div>
  ),
};

/**
 * Card 내부에서 사용
 */
export const InCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent>
        <Empty
          icon="Package"
          title="주문 내역이 없습니다"
          description="아직 주문한 상품이 없습니다."
          action={<Button>쇼핑하러 가기</Button>}
        />
      </CardContent>
    </Card>
  ),
};

/**
 * 테이블 빈 상태
 */
export const TableEmpty: Story = {
  render: () => (
    <div className="w-full border rounded-lg">
      <div className="border-b p-4">
        <h3 className="font-semibold">주문 목록</h3>
      </div>
      <Empty
        size="sm"
        icon="Inbox"
        title="주문이 없습니다"
        description="아직 주문한 내역이 없습니다."
      />
    </div>
  ),
};

/**
 * 검색 결과 없음
 */
export const SearchEmpty: Story = {
  args: {
    icon: "Search",
    title: "검색 결과가 없습니다",
    description: "다른 검색어로 시도해보세요.",
  },
};

/**
 * 에러 상태
 */
export const Error: Story = {
  args: {
    icon: "AlertCircle" as IconName,
    title: "오류가 발생했습니다",
    description: "데이터를 불러오는 중 문제가 발생했습니다.",
    action: <Button variant="outline">다시 시도</Button>,
  },
};

/**
 * 권한 없음
 */
export const NoPermission: Story = {
  args: {
    icon: "Lock",
    title: "접근 권한이 없습니다",
    description: "이 페이지에 접근할 권한이 없습니다.",
    action: <Button variant="outline">돌아가기</Button>,
  },
};
