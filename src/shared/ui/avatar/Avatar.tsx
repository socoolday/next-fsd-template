"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

/**
 * Avatar 크기 variants
 */
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-14 w-14",
        xl: "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

/**
 * Avatar 상태 variants
 */
const avatarStatusVariants = cva(
  "absolute rounded-full ring-2 ring-background",
  {
    variants: {
      status: {
        online: "bg-green-500",
        offline: "bg-gray-400",
        away: "bg-yellow-500",
        busy: "bg-red-500",
        dnd: "bg-red-600", // Do Not Disturb
      },
      size: {
        xs: "h-1.5 w-1.5 bottom-0 right-0",
        sm: "h-2 w-2 bottom-0 right-0",
        default: "h-3 w-3 bottom-0 right-0",
        lg: "h-3.5 w-3.5 bottom-0.5 right-0.5",
        xl: "h-4 w-4 bottom-1 right-1",
      },
    },
    defaultVariants: {
      status: "online",
      size: "default",
    },
  }
);

export type AvatarStatus = "online" | "offline" | "away" | "busy" | "dnd";
export type AvatarSize = "xs" | "sm" | "default" | "lg" | "xl";

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

/**
 * Avatar 루트 컴포넌트
 */
const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, className }))}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

/**
 * Avatar 이미지 컴포넌트
 */
const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

/**
 * Avatar Fallback 크기 variants
 */
const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center rounded-full bg-muted",
  {
    variants: {
      size: {
        xs: "text-[10px]",
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

/**
 * Avatar 폴백 컴포넌트 (이미지 로드 실패 시 표시)
 */
const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ size, className }))}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

/**
 * Avatar 상태 표시 컴포넌트
 */
interface AvatarStatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarStatusVariants> {}

const AvatarStatusBadge = React.forwardRef<
  HTMLSpanElement,
  AvatarStatusBadgeProps
>(({ className, status, size, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(avatarStatusVariants({ status, size, className }))}
    {...props}
  />
));
AvatarStatusBadge.displayName = "AvatarStatusBadge";

/**
 * Avatar와 상태를 함께 표시하는 래퍼 컴포넌트
 */
interface AvatarWithStatusProps {
  src?: string;
  alt?: string;
  fallback: string;
  status?: AvatarStatus;
  size?: AvatarSize;
  className?: string;
}

const AvatarWithStatus = React.forwardRef<HTMLDivElement, AvatarWithStatusProps>(
  ({ src, alt, fallback, status, size = "default", className }, ref) => (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <Avatar size={size}>
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback size={size}>{fallback}</AvatarFallback>
      </Avatar>
      {status && <AvatarStatusBadge status={status} size={size} />}
    </div>
  )
);
AvatarWithStatus.displayName = "AvatarWithStatus";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatusBadge,
  AvatarWithStatus,
  avatarVariants,
  avatarStatusVariants,
};
