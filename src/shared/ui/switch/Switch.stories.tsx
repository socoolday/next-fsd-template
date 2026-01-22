import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";
import { Label } from "@/shared/ui/label";
import { Icon } from "@/shared/ui/icon";

/**
 * Switch 컴포넌트는 켜기/끄기 상태를 전환하는 토글 스위치입니다.
 */
const meta: Meta<typeof Switch> = {
  title: "shared/ui/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "켜기/끄기 상태를 전환하는 토글 스위치 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "활성화 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 스위치
 */
export const Default: Story = {
  args: {},
};

/**
 * 활성화된 상태
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * 비활성화된 스위치
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * 비활성화 + 활성화 상태
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

/**
 * 레이블과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">비행기 모드</Label>
    </div>
  ),
};

/**
 * 설명과 함께 사용
 */
export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center justify-between w-[400px]">
      <div className="space-y-0.5">
        <Label htmlFor="marketing-emails" className="font-medium">
          마케팅 이메일
        </Label>
        <p className="text-sm text-muted-foreground">
          프로모션 및 신제품 정보를 받아보세요.
        </p>
      </div>
      <Switch id="marketing-emails" />
    </div>
  ),
};

/**
 * 설정 예시
 */
export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon name="Bell" className="h-4 w-4" />
          </div>
          <Label htmlFor="notifications" className="font-normal">
            알림 허용
          </Label>
        </div>
        <Switch id="notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon name="Moon" className="h-4 w-4" />
          </div>
          <Label htmlFor="dark-mode" className="font-normal">
            다크 모드
          </Label>
        </div>
        <Switch id="dark-mode" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon name="Save" className="h-4 w-4" />
          </div>
          <Label htmlFor="auto-save" className="font-normal">
            자동 저장
          </Label>
        </div>
        <Switch id="auto-save" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon name="Wifi" className="h-4 w-4" />
          </div>
          <Label htmlFor="wifi" className="font-normal">
            Wi-Fi
          </Label>
        </div>
        <Switch id="wifi" defaultChecked />
      </div>
    </div>
  ),
};

/**
 * 알림 설정
 */
export const NotificationSettings: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div>
        <h3 className="mb-4 font-semibold">알림 설정</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push" className="font-medium">푸시 알림</Label>
              <p className="text-sm text-muted-foreground">
                앱 푸시 알림을 받습니다.
              </p>
            </div>
            <Switch id="push" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email" className="font-medium">이메일 알림</Label>
              <p className="text-sm text-muted-foreground">
                이메일로 알림을 받습니다.
              </p>
            </div>
            <Switch id="email" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms" className="font-medium">SMS 알림</Label>
              <p className="text-sm text-muted-foreground">
                문자 메시지로 알림을 받습니다.
              </p>
            </div>
            <Switch id="sms" />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * 개인정보 설정
 */
export const PrivacySettings: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border p-4 space-y-4">
      <h3 className="font-semibold">개인정보 설정</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-b">
          <span className="text-sm">프로필 공개</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <span className="text-sm">활동 기록 공개</span>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <span className="text-sm">검색 결과에 표시</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm">위치 정보 사용</span>
          <Switch />
        </div>
      </div>
    </div>
  ),
};

/**
 * 카드 내 스위치
 */
export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border">
      <div className="p-4 border-b">
        <h3 className="font-semibold">기능 설정</h3>
        <p className="text-sm text-muted-foreground">앱 기능을 활성화/비활성화합니다.</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Zap" className="h-5 w-5 text-yellow-500" />
            <div>
              <div className="font-medium">빠른 실행</div>
              <div className="text-xs text-muted-foreground">즉시 앱을 실행합니다</div>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Shield" className="h-5 w-5 text-green-500" />
            <div>
              <div className="font-medium">보안 모드</div>
              <div className="text-xs text-muted-foreground">추가 보안 기능 활성화</div>
            </div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Sparkles" className="h-5 w-5 text-purple-500" />
            <div>
              <div className="font-medium">실험 기능</div>
              <div className="text-xs text-muted-foreground">베타 기능 사용</div>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  ),
};

/**
 * 활성/비활성 상태 표시
 */
export const WithStatusText: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="status-1" className="font-normal">기능 1</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-green-500">활성</span>
          <Switch id="status-1" defaultChecked />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="status-2" className="font-normal">기능 2</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">비활성</span>
          <Switch id="status-2" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 로딩 상태
 */
export const Loading: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch disabled />
      <Label className="font-normal text-muted-foreground">저장 중...</Label>
      <Icon name="Loader" className="h-4 w-4 animate-spin text-muted-foreground" />
    </div>
  ),
};

/**
 * 컴팩트 스위치 목록
 */
export const CompactList: Story = {
  render: () => (
    <div className="w-[250px] divide-y rounded-lg border">
      {["옵션 A", "옵션 B", "옵션 C", "옵션 D"].map((option, i) => (
        <div key={option} className="flex items-center justify-between px-4 py-2">
          <span className="text-sm">{option}</span>
          <Switch defaultChecked={i % 2 === 0} />
        </div>
      ))}
    </div>
  ),
};
