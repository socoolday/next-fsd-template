"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { useTheme } from "@/shared/lib";

interface ThemeToggleProps {
  /**
   * 시스템 옵션을 표시할지 여부
   * @default true
   */
  showSystem?: boolean;
}

/**
 * 다크/라이트 모드 토글 버튼
 * 
 * @example
 * <ThemeToggle />
 * <ThemeToggle showSystem={false} />
 */
export const ThemeToggle = ({ showSystem = true }: ThemeToggleProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">테마 변경</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          다크
        </DropdownMenuItem>
        {showSystem && (
          <DropdownMenuItem onClick={() => setTheme("system")}>
            시스템
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/**
 * 간단한 테마 토글 버튼
 * 클릭 시 바로 다크/라이트 모드를 전환합니다.
 * 드롭다운 메뉴 없이 바로 토글됩니다.
 * 
 * @example
 * <ThemeToggleSimple />
 */
export const ThemeToggleSimple = () => {
  const { toggleDarkMode, mounted } = useTheme();

  const handleToggle = React.useCallback(() => {
    if (!mounted) return;
    toggleDarkMode();
  }, [mounted, toggleDarkMode]);

  return (
    <Button variant="outline" size="icon" onClick={handleToggle} disabled={!mounted}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">테마 변경</span>
    </Button>
  );
};
