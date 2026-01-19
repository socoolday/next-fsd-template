import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";
import { Label } from "@/shared/ui/label";

/**
 * Checkbox 컴포넌트는 사용자가 옵션을 선택하거나 선택 해제할 수 있는 폼 요소입니다.
 */
const meta: Meta<typeof Checkbox> = {
  title: "shared/ui/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "옵션을 선택하거나 해제할 수 있는 체크박스 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 체크박스
 */
export const Default: Story = {
  args: {},
};

/**
 * 체크된 상태
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * 비활성화된 체크박스
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * 비활성화 + 체크된 상태
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

/**
 * 레이블과 함께 사용
 */
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">이용약관에 동의합니다</Label>
    </div>
  ),
};

/**
 * 설명과 함께 사용
 */
export const WithDescription: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms1" className="font-medium">
          이용약관 동의
        </Label>
        <p className="text-sm text-muted-foreground">
          서비스 이용약관에 동의합니다. 약관을 자세히 읽어주세요.
        </p>
      </div>
    </div>
  ),
};

/**
 * 폼에서 사용하는 체크박스 그룹
 */
export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="all" />
        <Label htmlFor="all" className="font-medium">
          전체 동의
        </Label>
      </div>
      <div className="border-t pt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-required" />
          <Label htmlFor="terms-required" className="font-normal">
            <span className="text-red-500">(필수)</span> 이용약관 동의
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="privacy-required" />
          <Label htmlFor="privacy-required" className="font-normal">
            <span className="text-red-500">(필수)</span> 개인정보 수집 및 이용 동의
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing" className="font-normal">
            <span className="text-muted-foreground">(선택)</span> 마케팅 정보 수신 동의
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter" className="font-normal">
            <span className="text-muted-foreground">(선택)</span> 뉴스레터 구독
          </Label>
        </div>
      </div>
    </div>
  ),
};

/**
 * 카드 형태 체크박스
 */
export const CardStyle: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      {[
        { id: "plan-basic", title: "Basic", price: "₩9,900/월" },
        { id: "plan-pro", title: "Pro", price: "₩29,900/월" },
        { id: "plan-team", title: "Team", price: "₩79,900/월" },
        { id: "plan-enterprise", title: "Enterprise", price: "문의" },
      ].map((plan) => (
        <label
          key={plan.id}
          htmlFor={plan.id}
          className="flex items-start space-x-3 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
        >
          <Checkbox id={plan.id} className="mt-1" />
          <div>
            <div className="font-medium">{plan.title}</div>
            <div className="text-sm text-muted-foreground">{plan.price}</div>
          </div>
        </label>
      ))}
    </div>
  ),
};

/**
 * 할 일 목록
 */
export const TodoList: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      {[
        { id: "todo-1", text: "디자인 시스템 검토", done: true },
        { id: "todo-2", text: "컴포넌트 문서화", done: true },
        { id: "todo-3", text: "테스트 코드 작성", done: false },
        { id: "todo-4", text: "코드 리뷰", done: false },
        { id: "todo-5", text: "배포 준비", done: false },
      ].map((todo) => (
        <div
          key={todo.id}
          className="flex items-center space-x-3 rounded-lg border p-3"
        >
          <Checkbox id={todo.id} defaultChecked={todo.done} />
          <Label
            htmlFor={todo.id}
            className={`font-normal cursor-pointer ${todo.done ? "line-through text-muted-foreground" : ""}`}
          >
            {todo.text}
          </Label>
        </div>
      ))}
    </div>
  ),
};

/**
 * 필터 체크박스
 */
export const Filters: Story = {
  render: () => (
    <div className="w-[250px] space-y-4">
      <div>
        <h3 className="mb-3 font-semibold">카테고리</h3>
        <div className="space-y-2">
          {["전자기기", "의류", "식품", "도서", "가구"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={`category-${category}`} />
              <Label htmlFor={`category-${category}`} className="font-normal">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t pt-4">
        <h3 className="mb-3 font-semibold">가격대</h3>
        <div className="space-y-2">
          {["~₩10,000", "₩10,000~₩50,000", "₩50,000~₩100,000", "₩100,000~"].map((price) => (
            <div key={price} className="flex items-center space-x-2">
              <Checkbox id={`price-${price}`} />
              <Label htmlFor={`price-${price}`} className="font-normal">
                {price}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

/**
 * 테이블 내 체크박스
 */
export const InTable: Story = {
  render: () => (
    <div className="w-[500px] rounded-lg border">
      <div className="flex items-center border-b bg-muted/50 p-3">
        <Checkbox id="select-all" />
        <Label htmlFor="select-all" className="ml-3 font-medium">전체 선택</Label>
      </div>
      {[
        { id: "row-1", name: "김철수", email: "kim@example.com" },
        { id: "row-2", name: "이영희", email: "lee@example.com" },
        { id: "row-3", name: "박민수", email: "park@example.com" },
      ].map((row) => (
        <div key={row.id} className="flex items-center border-b last:border-0 p-3">
          <Checkbox id={row.id} />
          <div className="ml-3 flex-1">
            <div className="font-medium">{row.name}</div>
            <div className="text-sm text-muted-foreground">{row.email}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * 인라인 체크박스
 */
export const Inline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option-1" />
        <Label htmlFor="option-1" className="font-normal">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-2" />
        <Label htmlFor="option-2" className="font-normal">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-3" />
        <Label htmlFor="option-3" className="font-normal">옵션 3</Label>
      </div>
    </div>
  ),
};

/**
 * 에러 상태
 */
export const WithError: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-error" className="border-red-500 data-[state=checked]:bg-red-500" />
        <Label htmlFor="terms-error" className="font-normal">
          이용약관에 동의합니다
        </Label>
      </div>
      <p className="text-sm text-red-500">이용약관에 동의해주세요.</p>
    </div>
  ),
};
