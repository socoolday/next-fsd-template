"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { Icon, type IconName } from "@/shared/ui/icon";

/**
 * Empty 컴포넌트 스타일 variants
 */
const emptyVariants = cva("flex flex-col items-center justify-center", {
  variants: {
    size: {
      sm: "py-8",
      default: "py-12",
      lg: "py-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const emptyIconVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      sm: "h-8 w-8",
      default: "h-12 w-12",
      lg: "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const emptyTitleVariants = cva("font-semibold text-foreground", {
  variants: {
    size: {
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const emptyDescriptionVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {
  /**
   * 아이콘 이름 (lucide-react)
   * @default "Inbox"
   */
  icon?: IconName;
  /**
   * 제목
   */
  title?: string;
  /**
   * 설명
   */
  description?: string;
  /**
   * 액션 버튼
   */
  action?: React.ReactNode;
  /**
   * 아이콘 표시 여부
   * @default true
   */
  showIcon?: boolean;
}

/**
 * Empty 컴포넌트
 * 데이터가 없을 때 표시하는 빈 상태 컴포넌트입니다.
 * 
 * @example
 * <Empty
 *   icon="Inbox"
 *   title="데이터가 없습니다"
 *   description="새로운 항목을 추가해보세요."
 *   action={<Button>추가하기</Button>}
 * />
 */
const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (
    {
      className,
      size,
      icon = "Inbox",
      title,
      description,
      action,
      showIcon = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(emptyVariants({ size }), className)}
        {...props}
      >
        {showIcon && icon && (
          <Icon
            name={icon}
            className={cn(emptyIconVariants({ size }), "mb-4")}
          />
        )}
        {title && (
          <h3 className={cn(emptyTitleVariants({ size }), "mb-2")}>
            {title}
          </h3>
        )}
        {description && (
          <p className={cn(emptyDescriptionVariants({ size }), "text-center")}>
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
);
Empty.displayName = "Empty";

export { Empty, emptyVariants, type EmptyProps };
