import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { cn } from "@/shared/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./NavigationMenu";

const meta: Meta<typeof NavigationMenu> = {
  title: "shared/ui/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "네비게이션 링크 모음을 위한 메뉴 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description: "중요한 내용을 표시하고 사용자의 응답을 요청하는 모달 다이얼로그",
  },
  {
    title: "Hover Card",
    href: "#",
    description: "호버 시 추가 정보를 미리 볼 수 있는 카드",
  },
  {
    title: "Progress",
    href: "#",
    description: "작업의 완료 상태를 표시하는 진행률 표시기",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "네이티브처럼 보이는 커스텀 스크롤바",
  },
  {
    title: "Tabs",
    href: "#",
    description: "탭 형식으로 콘텐츠를 구성하는 컴포넌트",
  },
  {
    title: "Tooltip",
    href: "#",
    description: "요소에 대한 추가 정보를 제공하는 팝업",
  },
];

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/**
 * 기본 Navigation Menu
 */
export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ShadCN/UI
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Radix UI와 Tailwind CSS로 구축된 아름다운 컴포넌트
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="소개">
                컴포넌트 라이브러리에 대한 전반적인 소개
              </ListItem>
              <ListItem href="#" title="설치">
                프로젝트에 컴포넌트를 추가하는 방법
              </ListItem>
              <ListItem href="#" title="타이포그래피">
                기본 타이포그래피 스타일 가이드
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>컴포넌트</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            문서
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

/**
 * 단순 링크
 */
export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            홈
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            소개
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            서비스
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            연락처
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

/**
 * 드롭다운 메뉴
 */
export const WithDropdown: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            홈
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>서비스</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <ListItem href="#" title="웹 개발">
                맞춤형 웹 애플리케이션 개발
              </ListItem>
              <ListItem href="#" title="앱 개발">
                iOS/Android 모바일 앱 개발
              </ListItem>
              <ListItem href="#" title="컨설팅">
                기술 컨설팅 및 아키텍처 설계
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>회사 소개</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <ListItem href="#" title="팀">
                우리 팀을 소개합니다
              </ListItem>
              <ListItem href="#" title="연혁">
                회사의 성장 스토리
              </ListItem>
              <ListItem href="#" title="채용">
                함께 할 인재를 찾습니다
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
