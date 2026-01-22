"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Calendar } from "./Calendar";
import { ko, enUS, ja, zhCN, es, fr, de, it, ptBR, ru } from "date-fns/locale";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Label } from "../label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";

const meta: Meta<typeof Calendar> = {
  title: "shared/ui/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "날짜를 선택하는 Calendar 컴포넌트입니다. 다양한 언어와 스타일을 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * 기본 캘린더 (단일 날짜 선택)
 */
export const Default: Story = {
  render: function CalendarDefault() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 날짜 범위 선택
 */
export const Range: Story = {
  render: function CalendarRange() {
    const [range, setRange] = React.useState<{ from: Date | undefined; to: Date | undefined } | undefined>({
      from: undefined,
      to: undefined,
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(newRange) => {
          if (newRange) {
            setRange({ from: newRange.from, to: newRange.to });
          } else {
            setRange({ from: undefined, to: undefined });
          }
        }}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};

/**
 * 여러 달 표시
 */
export const MultipleMonths: Story = {
  render: function CalendarMultiple() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        numberOfMonths={3}
      />
    );
  },
};

/**
 * 언어별 캘린더
 */
export const WithLanguages: Story = {
  render: function CalendarLanguages() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [locale, setLocale] = React.useState<typeof ko>(ko);

    const locales = [
      { value: ko, label: "한국어 (Korean)", code: "ko" },
      { value: enUS, label: "English (US)", code: "en" },
      { value: ja, label: "日本語 (Japanese)", code: "ja" },
      { value: zhCN, label: "中文 (Chinese)", code: "zh" },
      { value: es, label: "Español (Spanish)", code: "es" },
      { value: fr, label: "Français (French)", code: "fr" },
      { value: de, label: "Deutsch (German)", code: "de" },
      { value: it, label: "Italiano (Italian)", code: "it" },
      { value: ptBR, label: "Português (Brazil)", code: "pt-BR" },
      { value: ru, label: "Русский (Russian)", code: "ru" },
    ];

    return (
      <div className="space-y-4">
        <div className="w-[300px]">
          <Label htmlFor="locale-select">언어 선택</Label>
          <Select
            value={locales.findIndex((l) => l.value === locale).toString()}
            onValueChange={(value) => setLocale(locales[parseInt(value)].value)}
          >
            <SelectTrigger id="locale-select" className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {locales.map((loc, index) => (
                <SelectItem key={loc.code} value={index.toString()}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={locale}
          className="rounded-md border"
        />
      </div>
    );
  },
};

/**
 * 한국어 캘린더
 */
export const Korean: Story = {
  render: function CalendarKorean() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={ko}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 영어 캘린더
 */
export const English: Story = {
  render: function CalendarEnglish() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={enUS}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 일본어 캘린더
 */
export const Japanese: Story = {
  render: function CalendarJapanese() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={ja}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 중국어 캘린더
 */
export const Chinese: Story = {
  render: function CalendarChinese() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={zhCN}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 스페인어 캘린더
 */
export const Spanish: Story = {
  render: function CalendarSpanish() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={es}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 카드 내 캘린더
 */
export const InCard: Story = {
  render: function CalendarInCard() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>날짜 선택</CardTitle>
          <CardDescription>예약할 날짜를 선택하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </CardContent>
      </Card>
    );
  },
};

/**
 * 작은 크기 캘린더
 */
export const Small: Story = {
  render: function CalendarSmall() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border p-2 text-xs"
        classNames={{
          day_button: "h-7 w-7 text-xs",
          weekday: "text-[0.7rem]",
        }}
      />
    );
  },
};

/**
 * 큰 크기 캘린더
 */
export const Large: Story = {
  render: function CalendarLarge() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border p-4 text-base"
        classNames={{
          day_button: "h-10 w-10 text-base",
          weekday: "text-sm",
        }}
      />
    );
  },
};

/**
 * 외부 날짜 숨김
 */
export const HideOutsideDays: Story = {
  render: function CalendarHideOutside() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays={false}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 오늘 날짜 강조
 */
export const HighlightToday: Story = {
  render: function CalendarToday() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        classNames={{
          today: "bg-blue-100 text-blue-900 font-bold dark:bg-blue-900 dark:text-blue-100",
        }}
      />
    );
  },
};

/**
 * 커스텀 색상
 */
export const CustomColors: Story = {
  render: function CalendarCustom() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        classNames={{
          selected: "bg-green-600 text-white hover:!bg-green-700 hover:!text-white",
          today: "bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100",
        }}
      />
    );
  },
};

/**
 * 비활성화된 날짜
 */
export const WithDisabled: Story = {
  render: function CalendarDisabled() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // 오늘 이전 날짜 비활성화
    const disabledDates = (date: Date) => {
      return date < today;
    };

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDates}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 최소/최대 날짜 제한
 */
export const WithMinMax: Story = {
  render: function CalendarMinMax() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fromDate={nextWeek}
        toDate={nextMonth}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 주 시작일 변경 (일요일/월요일)
 */
export const WeekStart: Story = {
  render: function CalendarWeekStart() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [weekStartsOn, setWeekStartsOn] = React.useState<0 | 1>(0);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setWeekStartsOn(0)}
            className={`px-3 py-1 rounded text-sm ${
              weekStartsOn === 0
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            일요일 시작
          </button>
          <button
            onClick={() => setWeekStartsOn(1)}
            className={`px-3 py-1 rounded text-sm ${
              weekStartsOn === 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            월요일 시작
          </button>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          weekStartsOn={weekStartsOn}
          className="rounded-md border"
        />
      </div>
    );
  },
};

/**
 * 첫 주 표시 방식
 */
export const FirstWeek: Story = {
  render: function CalendarFirstWeek() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold">첫 주 항상 표시</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            fixedWeeks
            className="rounded-md border"
          />
        </div>
      </div>
    );
  },
};

/**
 * 캡션 포맷 커스터마이징
 */
export const CustomCaption: Story = {
  render: function CalendarCustomCaption() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    );
  },
};

/**
 * 다중 선택
 */
export const Multiple: Story = {
  render: function CalendarMultiple() {
    const [dates, setDates] = React.useState<Date[] | undefined>([]);
    return (
      <div className="space-y-4">
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          className="rounded-md border"
        />
        {dates && dates.length > 0 && (
          <div className="text-sm text-muted-foreground">
            선택된 날짜: {dates.length}개
          </div>
        )}
      </div>
    );
  },
};
