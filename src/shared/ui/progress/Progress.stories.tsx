import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect, useState } from "react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "shared/ui/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "진행 상태를 표시하는 Progress 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "진행률 (0-100)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Progress
 */
export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
  },
};

/**
 * 0% 진행률
 */
export const Zero: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

/**
 * 50% 진행률
 */
export const Half: Story = {
  args: {
    value: 50,
    className: "w-[300px]",
  },
};

/**
 * 100% 완료
 */
export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

/**
 * 라벨과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>다운로드 중...</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};

/**
 * 다양한 진행률
 */
export const AllStates: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>시작</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>진행중</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>절반</span>
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>거의 완료</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>완료</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

/**
 * 애니메이션 Progress
 */
export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[300px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>로딩 중...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

/**
 * 커스텀 컬러
 */
export const CustomColors: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <span className="text-sm text-green-600">성공</span>
        <Progress value={100} className="[&>div]:bg-green-500" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-blue-600">정보</span>
        <Progress value={60} className="[&>div]:bg-blue-500" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-yellow-600">경고</span>
        <Progress value={40} className="[&>div]:bg-yellow-500" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-red-600">오류</span>
        <Progress value={20} className="[&>div]:bg-red-500" />
      </div>
    </div>
  ),
};

/**
 * 크기 변형
 */
export const Sizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <span className="text-sm">얇음 (h-1)</span>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">기본 (h-2)</span>
        <Progress value={60} className="h-2" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">중간 (h-3)</span>
        <Progress value={60} className="h-3" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">두꺼움 (h-4)</span>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
};

/**
 * 그라디언트 Progress
 */
export const Gradient: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Progress
        value={75}
        className="[&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
      />
      <Progress
        value={60}
        className="[&>div]:bg-gradient-to-r [&>div]:from-green-400 [&>div]:to-blue-500"
      />
      <Progress
        value={90}
        className="[&>div]:bg-gradient-to-r [&>div]:from-pink-500 [&>div]:to-orange-500"
      />
    </div>
  ),
};

/**
 * 파일 업로드 예시
 */
export const FileUpload: Story = {
  render: function FileUploadProgress() {
    const [files] = useState([
      { name: "document.pdf", progress: 100 },
      { name: "image.png", progress: 75 },
      { name: "video.mp4", progress: 30 },
    ]);

    return (
      <div className="w-[350px] space-y-4">
        {files.map((file) => (
          <div key={file.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="truncate max-w-[200px]">{file.name}</span>
              <span className="text-muted-foreground">
                {file.progress === 100 ? "완료" : `${file.progress}%`}
              </span>
            </div>
            <Progress
              value={file.progress}
              className={
                file.progress === 100
                  ? "[&>div]:bg-green-500"
                  : ""
              }
            />
          </div>
        ))}
      </div>
    );
  },
};

/**
 * 단계별 Progress
 */
export const Steps: Story = {
  render: () => {
    const currentStep = 2;
    const totalSteps = 4;
    const progress = (currentStep / totalSteps) * 100;

    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between text-sm">
          <span>단계 {currentStep} / {totalSteps}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>정보 입력</span>
          <span>확인</span>
          <span>결제</span>
          <span>완료</span>
        </div>
      </div>
    );
  },
};

/**
 * 버퍼링 Progress (스트라이프)
 */
export const Striped: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Progress
        value={60}
        className="[&>div]:bg-[length:1rem_1rem] [&>div]:bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] [&>div]:animate-[progress-stripes_1s_linear_infinite]"
      />
      <style>{`
        @keyframes progress-stripes {
          0% { background-position: 1rem 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>
  ),
};
