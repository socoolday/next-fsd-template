"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

/**
 * 테마 프로바이더
 * next-themes를 래핑하여 다크/라이트 모드와 커스텀 테마 색상을 지원합니다.
 * 
 * @example
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
