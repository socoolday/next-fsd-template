import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toaster, toast } from "./Toaster";
import { Button } from "@/shared/ui/button";

const meta: Meta<typeof Toaster> = {
  title: "shared/ui/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "알림 메시지를 표시하는 Toast 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("알림 메시지입니다.")}>토스트 보기</Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("성공적으로 저장되었습니다.")}>
      성공 토스트
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() => toast.error("오류가 발생했습니다.")}
    >
      에러 토스트
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("새 메시지가 도착했습니다.", {
          description: "홍길동님이 메시지를 보냈습니다.",
        })
      }
    >
      설명 포함 토스트
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("파일이 삭제되었습니다.", {
          action: {
            label: "실행 취소",
            onClick: () => console.log("실행 취소"),
          },
        })
      }
    >
      액션 버튼 토스트
    </Button>
  ),
};

export const Promise: Story = {
  render: () => (
    <Button
      onClick={() => {
        const promise = new Promise((resolve) => setTimeout(resolve, 2000));
        toast.promise(promise, {
          loading: "로딩 중...",
          success: "완료되었습니다!",
          error: "오류가 발생했습니다.",
        });
      }}
    >
      Promise 토스트
    </Button>
  ),
};
