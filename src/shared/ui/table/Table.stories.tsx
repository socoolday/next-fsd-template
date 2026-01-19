import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Icon } from "@/shared/ui/icon";

const meta: Meta<typeof Table> = {
  title: "shared/ui/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "데이터를 표 형태로 표시하는 Table 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  { invoice: "INV001", status: "결제 완료", method: "신용카드", amount: "₩250,000" },
  { invoice: "INV002", status: "대기 중", method: "카카오페이", amount: "₩150,000" },
  { invoice: "INV003", status: "결제 완료", method: "계좌이체", amount: "₩350,000" },
  { invoice: "INV004", status: "결제 완료", method: "신용카드", amount: "₩450,000" },
  { invoice: "INV005", status: "환불", method: "신용카드", amount: "₩550,000" },
];

/**
 * 기본 테이블
 */
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>최근 결제 내역</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 상태 배지가 있는 테이블
 */
export const WithStatusBadge: Story = {
  render: () => {
    const getStatusBadge = (status: string) => {
      switch (status) {
        case "결제 완료":
          return <Badge className="bg-green-500">완료</Badge>;
        case "대기 중":
          return <Badge className="bg-yellow-500 text-black">대기</Badge>;
        case "환불":
          return <Badge variant="destructive">환불</Badge>;
        default:
          return <Badge variant="secondary">{status}</Badge>;
      }
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>송장번호</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>결제방법</TableHead>
            <TableHead className="text-right">금액</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{getStatusBadge(invoice.status)}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

/**
 * 체크박스가 있는 테이블
 */
export const WithCheckbox: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Checkbox />
          </TableHead>
          <TableHead>송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 액션 버튼이 있는 테이블
 */
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
          <TableHead className="w-[100px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Icon name="Edit" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Trash2" className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 사용자 목록 테이블
 */
export const UserList: Story = {
  render: () => {
    const users = [
      { id: 1, name: "홍길동", email: "hong@example.com", role: "관리자", status: "활성" },
      { id: 2, name: "김철수", email: "kim@example.com", role: "사용자", status: "활성" },
      { id: 3, name: "이영희", email: "lee@example.com", role: "사용자", status: "비활성" },
      { id: 4, name: "박민수", email: "park@example.com", role: "편집자", status: "활성" },
    ];

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>사용자</TableHead>
            <TableHead>역할</TableHead>
            <TableHead>상태</TableHead>
            <TableHead className="text-right">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge variant={user.status === "활성" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  <Icon name="MoreHorizontal" className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

/**
 * 제품 목록 테이블
 */
export const ProductList: Story = {
  render: () => {
    const products = [
      { id: 1, name: "노트북", category: "전자기기", price: "₩1,500,000", stock: 25 },
      { id: 2, name: "무선 이어폰", category: "전자기기", price: "₩89,000", stock: 150 },
      { id: 3, name: "키보드", category: "주변기기", price: "₩120,000", stock: 0 },
      { id: 4, name: "모니터", category: "전자기기", price: "₩450,000", stock: 12 },
    ];

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>제품명</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead className="text-right">가격</TableHead>
            <TableHead className="text-right">재고</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">
                {product.stock === 0 ? (
                  <span className="text-red-500">품절</span>
                ) : (
                  <span className={product.stock < 20 ? "text-yellow-500" : ""}>
                    {product.stock}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

/**
 * 합계가 있는 테이블
 */
export const WithFooter: Story = {
  render: () => {
    const items = [
      { name: "노트북", quantity: 2, price: 1500000 },
      { name: "마우스", quantity: 1, price: 50000 },
      { name: "키보드", quantity: 1, price: 120000 },
    ];
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>품목</TableHead>
            <TableHead className="text-right">수량</TableHead>
            <TableHead className="text-right">단가</TableHead>
            <TableHead className="text-right">소계</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">₩{item.price.toLocaleString()}</TableCell>
              <TableCell className="text-right">₩{(item.quantity * item.price).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>합계</TableCell>
            <TableCell className="text-right font-bold">₩{total.toLocaleString()}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

/**
 * 스트라이프 테이블
 */
export const Striped: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={invoice.invoice} className={index % 2 === 0 ? "bg-muted/50" : ""}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 호버 효과 테이블
 */
export const Hoverable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="cursor-pointer hover:bg-muted">
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 정렬 가능한 헤더
 */
export const SortableHeader: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button variant="ghost" className="-ml-4 h-8 data-[state=open]:bg-accent">
              송장번호
              <Icon name="ArrowUpDown" className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" className="-ml-4 h-8 data-[state=open]:bg-accent">
              상태
              <Icon name="ArrowUpDown" className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">
            <Button variant="ghost" className="h-8 data-[state=open]:bg-accent">
              금액
              <Icon name="ArrowDown" className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * 빈 테이블
 */
export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>송장번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-24 text-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Icon name="Inbox" className="h-8 w-8" />
              <p>데이터가 없습니다</p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
