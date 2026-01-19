import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

/**
 * Input 컴포넌트 스타일 variants
 * - size: 입력 필드 크기 (default, sm, lg)
 */
const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      inputSize: {
        default: "h-9",
        sm: "h-8 text-xs",
        lg: "h-10",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

/**
 * Input 컴포넌트
 * 
 * @example
 * // 기본 입력 필드
 * <Input placeholder="이메일을 입력하세요" />
 * 
 * // 작은 크기
 * <Input inputSize="sm" placeholder="검색..." />
 * 
 * // 비활성화
 * <Input disabled placeholder="비활성화됨" />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants, type InputProps };
