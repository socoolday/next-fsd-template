import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea, ScrollBar } from "./ScrollArea";
import { Separator } from "@/shared/ui/separator";
import { Icon } from "@/shared/ui/icon";

const meta: Meta<typeof ScrollArea> = {
  title: "shared/ui/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "커스텀 스크롤바가 있는 ScrollArea 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i) => `태그 ${i + 1}`);

/**
 * 기본 세로 스크롤 예제입니다.
 * 긴 목록을 스크롤할 때 사용합니다.
 */
export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">태그</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * 가로 스크롤 예제입니다.
 * 카드나 이미지 갤러리를 가로로 스크롤할 때 사용합니다.
 */
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-md border p-4 w-[150px] h-[150px] flex items-center justify-center bg-muted"
          >
            아이템 {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

/**
 * 양방향 스크롤 예제입니다.
 * 가로와 세로 모두 스크롤이 가능합니다.
 */
export const Both: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border">
      <div className="p-4">
        <div className="flex w-max space-x-4">
          {Array.from({ length: 10 }).map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-4">
              {Array.from({ length: 15 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="shrink-0 rounded-md border p-4 w-[120px] h-[120px] flex items-center justify-center bg-muted"
                >
                  {colIndex + 1}-{rowIndex + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

/**
 * 이미지 갤러리 스타일입니다.
 * 가로로 스크롤되는 이미지 갤러리를 보여줍니다.
 */
export const ImageGallery: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-md overflow-hidden border w-[200px] h-[150px] bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center"
          >
            <div className="text-sm text-muted-foreground">이미지 {i + 1}</div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

/**
 * 태그 목록 스타일입니다.
 * 가로로 나열된 태그들을 스크롤할 수 있습니다.
 */
export const TagList: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border">
      <div className="flex w-max space-x-2 p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-full border px-4 py-2 bg-muted text-sm"
          >
            태그 {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

/**
 * 코드 블록 스타일입니다.
 * 긴 코드를 세로로 스크롤할 수 있습니다.
 */
export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className="h-64 w-96 rounded-md border bg-muted">
      <div className="p-4 font-mono text-sm">
        <div className="text-muted-foreground">{`// 예제 코드`}</div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-foreground">
            {`const function${i + 1} = () => {`}
            <br />
            {`  return "Hello World ${i + 1}";`}
            <br />
            {`};`}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * 테이블 스타일입니다.
 * 넓은 테이블을 가로로 스크롤할 수 있습니다.
 */
export const Table: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border">
      <div className="p-4">
        <table className="w-max border-collapse">
          <thead>
            <tr className="border-b">
              <th className="border-r px-4 py-2 text-left">이름</th>
              <th className="border-r px-4 py-2 text-left">이메일</th>
              <th className="border-r px-4 py-2 text-left">전화번호</th>
              <th className="border-r px-4 py-2 text-left">주소</th>
              <th className="px-4 py-2 text-left">비고</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="border-r px-4 py-2">사용자 {i + 1}</td>
                <td className="border-r px-4 py-2">user{i + 1}@example.com</td>
                <td className="border-r px-4 py-2">010-1234-{String(i + 1).padStart(4, "0")}</td>
                <td className="border-r px-4 py-2">서울시 강남구 {i + 1}번지</td>
                <td className="px-4 py-2">활성</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

/**
 * 채팅 메시지 스타일입니다.
 * 세로로 스크롤되는 채팅 메시지 목록입니다.
 */
export const ChatMessages: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border">
      <div className="p-4 space-y-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                i % 2 === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <div className="text-sm font-medium">
                {i % 2 === 0 ? "나" : "상대방"}
              </div>
              <div className="text-sm">메시지 내용 {i + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * 대시보드 위젯 스타일입니다.
 * 여러 위젯을 세로로 스크롤할 수 있습니다.
 */
export const Dashboard: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border">
      <div className="p-4 space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border p-6 bg-card"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">위젯 {i + 1}</h3>
              <Icon name="Ellipsis" className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * 컴팩트한 스타일입니다.
 * 작은 공간에서 사용하는 스크롤 영역입니다.
 */
export const Compact: Story = {
  render: () => (
    <ScrollArea className="h-48 w-64 rounded-md border">
      <div className="p-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-xs py-1">
            컴팩트 아이템 {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

/**
 * 커스텀 스크롤바 스타일입니다.
 * 스크롤바의 색상과 크기를 커스터마이징할 수 있습니다.
 */
export const CustomScrollbar: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">커스텀 스크롤바</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
      <ScrollBar className="bg-primary/20" />
    </ScrollArea>
  ),
};
