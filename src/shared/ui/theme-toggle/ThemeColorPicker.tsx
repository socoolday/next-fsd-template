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
          ([key, { label, color }]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setThemeColor(key)}
              className="flex items-center gap-2"
            >
              <div
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: color }}
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
