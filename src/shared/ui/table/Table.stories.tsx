import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

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
