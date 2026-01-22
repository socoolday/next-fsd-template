import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "shared/ui/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "범위 값을 선택하는 Slider 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 슬라이더 예제입니다.
 * 단일 값을 선택할 수 있습니다.
 */
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

const VolumeComponent = () => {
  const [value, setValue] = React.useState([50]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>볼륨</span>
        <span>{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

/**
 * 볼륨 조절 슬라이더입니다.
 * 현재 볼륨 값을 표시합니다.
 */
export const Volume: Story = {
  render: () => <VolumeComponent />,
};

const PriceComponent = () => {
  const [value, setValue] = React.useState([50000]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>가격 범위</span>
        <span>₩{value[0].toLocaleString()}</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100000}
        step={1000}
        className="w-full"
      />
    </div>
  );
};

/**
 * 가격 범위 슬라이더입니다.
 * 가격 필터링에 사용할 수 있습니다.
 */
export const Price: Story = {
  render: () => <PriceComponent />,
};

const RangeComponent = () => {
  const [value, setValue] = React.useState([20, 80]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>범위</span>
        <span>
          {value[0]} - {value[1]}
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

/**
 * 범위 슬라이더입니다.
 * 최소값과 최대값을 모두 선택할 수 있습니다.
 */
export const Range: Story = {
  render: () => <RangeComponent />,
};

const PriceRangeComponent = () => {
  const [value, setValue] = React.useState([10000, 50000]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>가격 범위</span>
        <span>
          ₩{value[0].toLocaleString()} - ₩{value[1].toLocaleString()}
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100000}
        step={1000}
        className="w-full"
      />
    </div>
  );
};

/**
 * 가격 범위 필터입니다.
 * 최소 가격과 최대 가격을 선택할 수 있습니다.
 */
export const PriceRange: Story = {
  render: () => <PriceRangeComponent />,
};

const TemperatureComponent = () => {
  const [value, setValue] = React.useState([22]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>온도</span>
        <span>{value[0]}°C</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={16}
        max={30}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>16°C</span>
        <span>30°C</span>
      </div>
    </div>
  );
};

/**
 * 온도 조절 슬라이더입니다.
 * 온도 설정에 사용할 수 있습니다.
 */
export const Temperature: Story = {
  render: () => <TemperatureComponent />,
};

const BrightnessComponent = () => {
  const [value, setValue] = React.useState([75]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>밝기</span>
        <span>{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

/**
 * 밝기 조절 슬라이더입니다.
 * 화면 밝기나 조명 밝기를 조절할 때 사용합니다.
 */
export const Brightness: Story = {
  render: () => <BrightnessComponent />,
};

const SpeedComponent = () => {
  const [value, setValue] = React.useState([3]);
  const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>재생 속도</span>
        <span>{speeds[value[0]]}x</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={speeds.length - 1}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0.25x</span>
        <span>2x</span>
      </div>
    </div>
  );
};

/**
 * 속도 조절 슬라이더입니다.
 * 재생 속도나 애니메이션 속도를 조절할 때 사용합니다.
 */
export const Speed: Story = {
  render: () => <SpeedComponent />,
};

const StepsComponent = () => {
  const [value, setValue] = React.useState([2]);
  const steps = ["낮음", "보통", "높음", "매우 높음"];
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>레벨</span>
        <span>{steps[value[0]]}</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={steps.length - 1}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        {steps.map((step, i) => (
          <span key={i}>{step}</span>
        ))}
      </div>
    </div>
  );
};

/**
 * 단계별 슬라이더입니다.
 * 특정 단계로만 이동할 수 있습니다.
 */
export const Steps: Story = {
  render: () => <StepsComponent />,
};

/**
 * 비활성화된 슬라이더입니다.
 * 사용할 수 없는 상태를 보여줍니다.
 */
export const Disabled: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>비활성화</span>
        <span className="text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} disabled className="w-full" />
    </div>
  ),
};

/**
 * 작은 크기 슬라이더입니다.
 * 컴팩트한 UI에서 사용합니다.
 */
export const Small: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-xs">
        <span>작은 크기</span>
        <span>50%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="w-full [&>div>div]:h-1 [&>div>div>div]:h-1 [&>div>div>div>div]:h-3 [&>div>div>div>div]:w-3"
      />
    </div>
  ),
};

/**
 * 큰 크기 슬라이더입니다.
 * 터치 인터페이스에서 사용하기 좋습니다.
 */
export const Large: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-base">
        <span>큰 크기</span>
        <span>50%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="w-full [&>div>div]:h-2 [&>div>div>div]:h-2 [&>div>div>div>div]:h-6 [&>div>div>div>div]:w-6"
      />
    </div>
  ),
};

/**
 * 커스텀 색상 슬라이더입니다.
 * 다양한 색상으로 스타일을 변경할 수 있습니다.
 */
export const CustomColor: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>기본</span>
          <span>50%</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>초록색</span>
          <span>50%</span>
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>div>div]:bg-green-500/20 [&>div>div>div]:bg-green-500 [&>div>div>div>div]:border-green-500/50"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>파란색</span>
          <span>50%</span>
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>div>div]:bg-blue-500/20 [&>div>div>div]:bg-blue-500 [&>div>div>div>div]:border-blue-500/50"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>빨간색</span>
          <span>50%</span>
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>div>div]:bg-red-500/20 [&>div>div>div]:bg-red-500 [&>div>div>div>div]:border-red-500/50"
        />
      </div>
    </div>
  ),
};

const ProgressComponent = () => {
  const [value, setValue] = React.useState([30]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const total = 180; // 3분
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>{formatTime(value[0])}</span>
        <span>{formatTime(total)}</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={total}
        step={1}
        className="w-full"
      />
    </div>
  );
};

/**
 * 진행률 표시 슬라이더입니다.
 * 비디오나 오디오 재생 진행률을 표시할 때 사용합니다.
 */
export const Progress: Story = {
  render: () => <ProgressComponent />,
};

const RatingComponent = () => {
  const [value, setValue] = React.useState([7]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>평점</span>
        <span>{value[0]}/10</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={10}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0</span>
        <span>5</span>
        <span>10</span>
      </div>
    </div>
  );
};

/**
 * 점수 평가 슬라이더입니다.
 * 리뷰나 평가 점수를 선택할 때 사용합니다.
 */
export const Rating: Story = {
  render: () => <RatingComponent />,
};

const AgeRangeComponent = () => {
  const [value, setValue] = React.useState([20, 40]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>연령대</span>
        <span>
          {value[0]}세 - {value[1]}세
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0세</span>
        <span>50세</span>
        <span>100세</span>
      </div>
    </div>
  );
};

/**
 * 연령대 선택 슬라이더입니다.
 * 필터링이나 통계에 사용할 수 있습니다.
 */
export const AgeRange: Story = {
  render: () => <AgeRangeComponent />,
};

const OpacityComponent = () => {
  const [value, setValue] = React.useState([80]);
  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>투명도</span>
        <span>{value[0]}%</span>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

/**
 * 투명도 조절 슬라이더입니다.
 * 이미지나 레이어의 투명도를 조절할 때 사용합니다.
 */
export const Opacity: Story = {
  render: () => <OpacityComponent />,
};

const MultipleComponent = () => {
  const [volume, setVolume] = React.useState([70]);
  const [brightness, setBrightness] = React.useState([80]);
  const [contrast, setContrast] = React.useState([60]);
  return (
    <div className="w-[300px] space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>볼륨</span>
          <span>{volume[0]}%</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>밝기</span>
          <span>{brightness[0]}%</span>
        </div>
        <Slider
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>대비</span>
          <span>{contrast[0]}%</span>
        </div>
        <Slider
          value={contrast}
          onValueChange={setContrast}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
};

/**
 * 여러 슬라이더 조합 예제입니다.
 * 여러 설정을 동시에 조절할 수 있습니다.
 */
export const Multiple: Story = {
  render: () => <MultipleComponent />,
};
