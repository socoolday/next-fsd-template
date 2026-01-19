"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { THEMES, type ThemeColor } from "./theme-config";

/**
 * 테마 관리를 위한 커스텀 훅
 * 다크/라이트 모드와 색상 테마를 모두 관리합니다.
 * 
 * @example
 * const { theme, setTheme, themeColor, setThemeColor, isDark } = useTheme();
 */
export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [themeColor, setThemeColorState] = useState<ThemeColor>("default");
  const [mounted, setMounted] = useState(false);

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setMounted(true);
    // localStorage에서 테마 색상 복원
    const savedThemeColor = localStorage.getItem("theme-color") as ThemeColor;
    if (savedThemeColor && THEMES.includes(savedThemeColor)) {
      setThemeColorState(savedThemeColor);
      document.documentElement.setAttribute("data-theme", savedThemeColor === "default" ? "" : savedThemeColor);
    }
  }, []);

  /**
   * 테마 색상 변경
   */
  const setThemeColor = useCallback((color: ThemeColor) => {
    setThemeColorState(color);
    localStorage.setItem("theme-color", color);
    
    if (color === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", color);
    }
  }, []);

  /**
   * 다크 모드 토글
   */
  const toggleDarkMode = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return {
    /** 현재 테마 (light, dark, system) */
    theme,
    /** 테마 설정 */
    setTheme,
    /** 실제 적용된 테마 (system인 경우 실제 값) */
    resolvedTheme,
    /** 현재 테마 색상 */
    themeColor,
    /** 테마 색상 설정 */
    setThemeColor,
    /** 다크 모드 여부 */
    isDark: resolvedTheme === "dark",
    /** 다크 모드 토글 */
    toggleDarkMode,
    /** 마운트 여부 (hydration 완료 확인용) */
    mounted,
  };
};
