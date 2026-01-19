"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "shared/ui/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "날짜를 선택하는 Calendar 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Range: Story = {
  render: function CalendarRange() {
    const [range, setRange] = React.useState<{ from: Date | undefined; to: Date | undefined }>({
      from: undefined,
      to: undefined,
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(newRange) => setRange(newRange || { from: undefined, to: undefined })}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};
