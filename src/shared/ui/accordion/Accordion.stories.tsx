import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "shared/ui/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "접고 펼 수 있는 콘텐츠 섹션을 제공하는 Accordion 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>계정 설정은 어떻게 하나요?</AccordionTrigger>
        <AccordionContent>
          설정 페이지에서 계정 정보, 비밀번호, 알림 설정 등을 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>요금제는 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          무료, 프로, 엔터프라이즈 세 가지 요금제를 제공합니다. 자세한 내용은
          요금제 페이지를 확인해주세요.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>환불은 가능한가요?</AccordionTrigger>
        <AccordionContent>
          구매 후 7일 이내에 환불을 요청하시면 전액 환불해 드립니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>섹션 1</AccordionTrigger>
        <AccordionContent>
          여러 섹션을 동시에 열 수 있는 Accordion입니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>섹션 2</AccordionTrigger>
        <AccordionContent>
          type=&quot;multiple&quot;로 설정하면 여러 항목을 동시에 펼칠 수
          있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>섹션 3</AccordionTrigger>
        <AccordionContent>각 섹션의 콘텐츠입니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
