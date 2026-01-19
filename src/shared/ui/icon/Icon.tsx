import * as React from "react";
import { icons, type LucideProps } from "lucide-react";
import { cn } from "@/shared/lib/utils";

/**
 * lucide-react 아이콘 이름 타입
 */
type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  /**
   * 아이콘 이름 (lucide-react 아이콘 이름)
   */
  name: IconName;
}

/**
 * Icon 래퍼 컴포넌트
 * lucide-react 아이콘을 래핑하여 사용합니다.
 * FSD 규칙에 따라 lucide-react를 직접 import하지 않고 이 컴포넌트를 사용하세요.
 * 
 * @example
 * <Icon name="User" className="h-4 w-4" />
 * <Icon name="Settings" size={24} />
 * <Icon name="ChevronRight" strokeWidth={2} />
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found in lucide-react`);
      return null;
    }

    return <LucideIcon ref={ref} className={cn(className)} {...props} />;
  }
);
Icon.displayName = "Icon";

export { Icon, type IconProps, type IconName };
