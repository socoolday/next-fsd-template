"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ThemeProvider } from "@/shared/lib";
import { Toaster } from "@/shared/ui";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * 앱 전역 프로바이더
 * - QueryClientProvider: React Query 상태 관리
 * - SessionProvider: NextAuth 세션 관리
 * - ThemeProvider: 다크/라이트 모드 및 테마 색상 관리
 * - Toaster: 토스트 알림
 */
export const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};
