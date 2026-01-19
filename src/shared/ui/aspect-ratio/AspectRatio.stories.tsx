import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "shared/ui/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "지정된 비율을 유지하는 컨테이너 컴포넌트입니다. 이미지나 비디오에 유용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.5, max: 3, step: 0.1 },
      description: "가로/세로 비율 (예: 16/9 = 1.78)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 16:9 비율 (동영상)
 */
export const Ratio16by9: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          16:9 비율
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 4:3 비율
 */
export const Ratio4by3: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          4:3 비율
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 1:1 비율 (정사각형)
 */
export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
          1:1 정사각형
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 이미지와 함께 사용
 */
export const WithImage: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="object-cover"
          unoptimized
        />
      </AspectRatio>
    </div>
  ),
};

/**
 * 비디오 플레이스홀더
 */
export const VideoPlaceholder: Story = {
  render: () => (
    <div className="w-[560px]">
      <AspectRatio ratio={16 / 9} className="bg-black rounded-lg overflow-hidden">
        <div className="flex h-full w-full flex-col items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-2"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-sm">비디오 재생</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 다양한 비율 비교
 */
export const CompareRatios: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      <div>
        <p className="text-sm font-medium mb-2">21:9 (울트라와이드)</p>
        <AspectRatio ratio={21 / 9} className="bg-muted rounded-lg">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
            21:9
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">16:9 (HD)</p>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
            16:9
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">4:3 (클래식)</p>
        <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
            4:3
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">1:1 (정사각형)</p>
        <AspectRatio ratio={1} className="bg-muted rounded-lg">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
            1:1
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
};

/**
 * 카드 썸네일
 */
export const CardThumbnail: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border overflow-hidden">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
          <span className="text-4xl">🖼️</span>
        </div>
      </AspectRatio>
      <div className="p-4">
        <h3 className="font-semibold">카드 제목</h3>
        <p className="text-sm text-muted-foreground mt-1">
          AspectRatio를 사용한 카드 썸네일 예시입니다.
        </p>
      </div>
    </div>
  ),
};
