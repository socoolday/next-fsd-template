/**
 * 지원되는 테마 색상 목록
 */
export const THEMES = ["default", "blue", "green", "rose", "orange", "violet", "slate"] as const;

/**
 * 테마 색상 타입
 */
export type ThemeColor = (typeof THEMES)[number];

/**
 * 테마 색상 정보 (UI 표시용)
 */
export const THEME_COLORS: Record<ThemeColor, { label: string; color: string }> = {
  default: {
    label: "기본 (Neutral)",
    color: "#171717",
  },
  blue: {
    label: "블루",
    color: "#2563eb",
  },
  green: {
    label: "그린",
    color: "#16a34a",
  },
  rose: {
    label: "로즈",
    color: "#e11d48",
  },
  orange: {
    label: "오렌지",
    color: "#ea580c",
  },
  violet: {
    label: "바이올렛",
    color: "#7c3aed",
  },
  slate: {
    label: "슬레이트",
    color: "#475569",
  },
};
