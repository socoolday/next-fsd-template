"use client";

import * as React from "react";
import { Check, Palette } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/shared/ui/dropdown-menu";
import { useTheme, THEME_COLORS, type ThemeColor } from "@/shared/lib";
import { cn } from "@/shared/lib/utils";

/**
 * 테마 색상별 배경색 클래스 매핑
 */
const themeColorClasses: Record<ThemeColor, string> = {
  default: "bg-[#171717]",
  blue: "bg-[#2563eb]",
  green: "bg-[#16a34a]",
  rose: "bg-[#e11d48]",
  orange: "bg-[#ea580c]",
  violet: "bg-[#7c3aed]",
  slate: "bg-[#475569]",
};

/**
 * 테마 색상 선택기
 * 
 * @example
 * <ThemeColorPicker />
 */
export const ThemeColorPicker = () => {
  const { themeColor, setThemeColor, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Palette className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">테마 색상</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">테마 색상</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>테마 색상</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(Object.entries(THEME_COLORS) as [ThemeColor, { label: string; color: string }][]).map(
          ([key, { label }]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setThemeColor(key)}
              className="flex items-center gap-2"
            >
              <div
                className={cn("h-4 w-4 rounded-full border", themeColorClasses[key])}
              />
              <span className="flex-1">{label}</span>
              {themeColor === key && (
                <Check className={cn("h-4 w-4")} />
              )}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
