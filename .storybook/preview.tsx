import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider } from "../src/shared/lib";
import "../src/app/globals.css";

/**
 * Storybook 데코레이터 - 테마 적용
 */
const withTheme = (Story: React.ComponentType, context: { globals: { theme: string; themeColor: string } }) => {
  const { theme, themeColor } = context.globals;
  const [currentTheme, setCurrentTheme] = React.useState(theme || "system");

  // Storybook globals의 theme 변경 감지
  React.useEffect(() => {
    setCurrentTheme(theme || "system");
  }, [theme]);

  // 테마 색상 적용
  React.useEffect(() => {
    const html = document.documentElement;
    if (themeColor && themeColor !== "default") {
      html.setAttribute("data-theme", themeColor);
    } else {
      html.removeAttribute("data-theme");
    }
  }, [themeColor]);

  return (
    <ThemeProvider
      key={currentTheme} // theme 변경 시 재마운트하여 테마 적용
      attribute="class"
      defaultTheme={currentTheme}
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-[100px] p-4 bg-background text-foreground">
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    backgrounds: {
      disable: true, // 배경색을 CSS 변수로 제어하므로 비활성화
    },
    layout: "centered",
  },
  globalTypes: {
    theme: {
      description: "다크/라이트 모드",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "라이트 모드" },
          { value: "dark", icon: "moon", title: "다크 모드" },
        ],
        dynamicTitle: true,
      },
    },
    themeColor: {
      description: "테마 색상",
      toolbar: {
        title: "Theme Color",
        icon: "paintbrush",
        items: [
          { value: "default", title: "기본 (Neutral)" },
          { value: "blue", title: "블루" },
          { value: "green", title: "그린" },
          { value: "rose", title: "로즈" },
          { value: "orange", title: "오렌지" },
          { value: "violet", title: "바이올렛" },
          { value: "slate", title: "슬레이트" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
    themeColor: "default",
  },
  decorators: [withTheme],
};

export default preview;
