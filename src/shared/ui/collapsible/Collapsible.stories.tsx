
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Icon } from "@/shared/ui/icon";
import { Button } from "@/shared/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "shared/ui/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "콘텐츠를 접고 펼칠 수 있는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Collapsible
 */
export const Default: Story = {
  render: function DefaultCollapsible() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold whitespace-nowrap">
            @peduarte 님이 3개의 저장소를 고정했습니다
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon name="ChevronsUpDown" className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

/**
 * FAQ 스타일
 */
export const FAQ: Story = {
  render: function FAQCollapsible() {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (item: string) => {
      setOpenItems((prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev, item]
      );
    };

    const faqs = [
      {
        id: "1",
        question: "ShadCN/UI란 무엇인가요?",
        answer:
          "ShadCN/UI는 Radix UI와 Tailwind CSS를 기반으로 한 재사용 가능한 컴포넌트 모음입니다. 복사하여 붙여넣기 방식으로 사용할 수 있어 커스터마이징이 용이합니다.",
      },
      {
        id: "2",
        question: "Next.js 15의 주요 특징은?",
        answer:
          "Next.js 15는 Turbopack 지원, 향상된 캐싱, React 19 지원 등 다양한 성능 개선과 새로운 기능을 제공합니다.",
      },
      {
        id: "3",
        question: "FSD 아키텍처란?",
        answer:
          "Feature-Sliced Design(FSD)은 프론트엔드 프로젝트를 기능 단위로 구조화하는 아키텍처 방법론입니다. shared, entities, features, widgets, pages, app 레이어로 구성됩니다.",
      },
    ];

    return (
      <div className="w-[400px] space-y-2">
        {faqs.map((faq) => (
          <Collapsible
            key={faq.id}
            open={openItems.includes(faq.id)}
            onOpenChange={() => toggleItem(faq.id)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="flex w-full justify-between p-4 font-medium"
              >
                {faq.question}
                <Icon name="ChevronsUpDown" className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

/**
 * 필터 패널
 */
export const FilterPanel: Story = {
  render: function FilterPanelCollapsible() {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[280px] rounded-lg border p-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">필터</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <Icon name="ChevronsUpDown" className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">카테고리</label>
            <select className="w-full rounded-md border p-2 text-sm" title="카테고리 선택">
              <option>전체</option>
              <option>전자기기</option>
              <option>의류</option>
              <option>식품</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">가격대</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="최소"
                className="w-full rounded-md border p-2 text-sm"
              />
              <input
                type="number"
                placeholder="최대"
                className="w-full rounded-md border p-2 text-sm"
              />
            </div>
          </div>
          <Button className="w-full">적용</Button>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
