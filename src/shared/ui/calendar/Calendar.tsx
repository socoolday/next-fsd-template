"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, type Locale } from "react-day-picker";
import { ko } from "date-fns/locale";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  /**
   * 언어 로케일 설정
   * @default ko (한국어)
   */
  locale?: Locale;
};

/**
 * Calendar 컴포넌트
 * react-day-picker를 기반으로 한 달력 컴포넌트입니다.
 * 
 * @example
 * const [date, setDate] = useState<Date | undefined>(new Date());
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale = ko,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={locale}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        // 레이아웃
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",

        // 날짜 셀 (day): 범위 선택 시 배경색 및 둥근 모서리 처리
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          // 범위 선택 시 중간 날짜 배경색 (연한 primary)
          "[&:has([aria-selected])]:bg-primary/15",
          "[&:has([aria-selected].day-outside)]:bg-primary/5",
          "[&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),

        // 날짜 버튼: ghost 버튼 기반, 선택된 날짜는 primary 색상
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal",
          // 선택된 날짜 (시작/끝): primary 색상
          "aria-selected:opacity-100",
          "aria-selected:bg-primary aria-selected:text-primary-foreground",
          // 선택된 날짜 hover: ghost의 hover 스타일 완전히 무시
          "aria-selected:hover:bg-primary aria-selected:hover:text-primary-foreground",
          // 선택된 날짜 focus: primary 색상 유지
          "aria-selected:focus:bg-primary aria-selected:focus:text-primary-foreground"
        ),

        // 범위 시작/끝 마커
        range_start: "day-range-start",
        range_end: "day-range-end",

        // 선택된 날짜 (시작/끝): primary 색상, hover 시에도 primary 유지
        selected: cn(
          "bg-primary text-primary-foreground",
          "hover:bg-primary hover:text-primary-foreground",
          "focus:bg-primary focus:text-primary-foreground",
          "rounded-md"
        ),

        // 오늘 날짜
        today: "bg-accent text-accent-foreground rounded-md",

        // 이전/다음 달 날짜
        outside:
          "day-outside text-muted-foreground aria-selected:bg-primary/10 aria-selected:text-muted-foreground",

        // 비활성화 날짜
        disabled: "text-muted-foreground opacity-50",

        // 범위 중간 날짜: 연한 primary 배경, 텍스트는 기본 색상
        range_middle: cn(
          "aria-selected:bg-primary/20 aria-selected:text-foreground",
          "aria-selected:rounded-none"
        ),

        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar, type CalendarProps };
