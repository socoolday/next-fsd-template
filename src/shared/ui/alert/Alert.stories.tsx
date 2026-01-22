import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "../icon/Icon";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "shared/ui/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "알림이나 중요한 메시지를 표시하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "Alert의 스타일 변형",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * 기본 Alert 스타일
 */
export const Default: Story = {
  render: () => (
    <Alert>
      <Icon name="Terminal" className="h-4 w-4" />
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>
        이것은 기본 Alert 컴포넌트입니다.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Destructive 변형 - 에러나 위험한 작업을 알릴 때
 */
export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <Icon name="CircleAlert" className="h-4 w-4" />
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        세션이 만료되었습니다. 다시 로그인해주세요.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 성공 메시지 예시 (커스텀 스타일)
 */
export const Success: Story = {
  render: () => (
    <Alert className="border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600">
      <Icon name="CircleCheck" className="h-4 w-4" />
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>
        변경사항이 성공적으로 저장되었습니다.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 정보 메시지 예시 (커스텀 스타일)
 */
export const InfoMessage: Story = {
  render: () => (
    <Alert className="border-blue-500/50 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-600">
      <Icon name="Info" className="h-4 w-4" />
      <AlertTitle>정보</AlertTitle>
      <AlertDescription>
        시스템 점검이 예정되어 있습니다. 자세한 내용은 공지사항을 확인해주세요.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 경고 메시지 예시 (커스텀 스타일)
 */
export const Warning: Story = {
  render: () => (
    <Alert className="border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600">
      <Icon name="TriangleAlert" className="h-4 w-4" />
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>
        저장하지 않은 변경사항이 있습니다. 페이지를 떠나시겠습니까?
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 아이콘 없는 Alert
 */
export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>제목만 있는 Alert</AlertTitle>
      <AlertDescription>
        아이콘 없이도 Alert를 사용할 수 있습니다.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 다양한 변형 모아보기
 */
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Icon name="Terminal" className="h-4 w-4" />
        <AlertTitle>기본 알림</AlertTitle>
        <AlertDescription>
          일반적인 정보를 전달하는 기본 스타일입니다.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <Icon name="CircleAlert" className="h-4 w-4" />
        <AlertTitle>오류 알림</AlertTitle>
        <AlertDescription>
          오류나 위험한 상황을 알리는 스타일입니다.
        </AlertDescription>
      </Alert>
      <Alert className="border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600">
        <Icon name="CircleCheck" className="h-4 w-4" />
        <AlertTitle>성공 알림</AlertTitle>
        <AlertDescription>
          작업이 성공적으로 완료되었습니다.
        </AlertDescription>
      </Alert>
      <Alert className="border-blue-500/50 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-600">
        <Icon name="Info" className="h-4 w-4" />
        <AlertTitle>정보 알림</AlertTitle>
        <AlertDescription>
          참고할 만한 정보를 전달합니다.
        </AlertDescription>
      </Alert>
      <Alert className="border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600">
        <Icon name="TriangleAlert" className="h-4 w-4" />
        <AlertTitle>경고 알림</AlertTitle>
        <AlertDescription>
          주의가 필요한 상황입니다.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
