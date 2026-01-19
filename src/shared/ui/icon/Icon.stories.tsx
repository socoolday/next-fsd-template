import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

/**
 * Icon 컴포넌트는 lucide-react 아이콘을 래핑하여 제공합니다.
 * FSD 규칙에 따라 lucide-react를 직접 import하지 않고 이 컴포넌트를 사용합니다.
 */
const meta: Meta<typeof Icon> = {
  title: "shared/ui/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "lucide-react 아이콘을 래핑한 컴포넌트입니다. name prop으로 아이콘 이름을 지정합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [
        "User",
        "Settings",
        "Home",
        "Mail",
        "Bell",
        "Search",
        "Heart",
        "Star",
        "Check",
        "X",
        "ChevronRight",
        "ChevronLeft",
        "ChevronDown",
        "ChevronUp",
        "Plus",
        "Minus",
        "Edit",
        "Trash2",
        "Download",
        "Upload",
      ],
      description: "아이콘 이름 (lucide-react)",
    },
    size: {
      control: { type: "number", min: 12, max: 64, step: 4 },
      description: "아이콘 크기 (px)",
    },
    strokeWidth: {
      control: { type: "number", min: 1, max: 4, step: 0.5 },
      description: "선 두께",
    },
    color: {
      control: "color",
      description: "아이콘 색상",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 아이콘
 */
export const Default: Story = {
  args: {
    name: "User",
  },
};

/**
 * 크기 조절
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Heart" size={16} />
      <Icon name="Heart" size={24} />
      <Icon name="Heart" size={32} />
      <Icon name="Heart" size={48} />
    </div>
  ),
};

/**
 * 색상 적용
 */
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Star" className="text-yellow-500" size={24} />
      <Icon name="Heart" className="text-red-500" size={24} />
      <Icon name="Check" className="text-green-500" size={24} />
      <Icon name="X" className="text-destructive" size={24} />
      <Icon name="Bell" className="text-primary" size={24} />
    </div>
  ),
};

/**
 * 선 두께 조절
 */
export const StrokeWidths: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Search" strokeWidth={1} size={24} />
      <Icon name="Search" strokeWidth={1.5} size={24} />
      <Icon name="Search" strokeWidth={2} size={24} />
      <Icon name="Search" strokeWidth={2.5} size={24} />
      <Icon name="Search" strokeWidth={3} size={24} />
    </div>
  ),
};

/**
 * 일반적으로 사용되는 아이콘들
 */
export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="Home" size={24} />
        <span className="text-xs text-muted-foreground">Home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size={24} />
        <span className="text-xs text-muted-foreground">User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Settings" size={24} />
        <span className="text-xs text-muted-foreground">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Mail" size={24} />
        <span className="text-xs text-muted-foreground">Mail</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Bell" size={24} />
        <span className="text-xs text-muted-foreground">Bell</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Search" size={24} />
        <span className="text-xs text-muted-foreground">Search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Plus" size={24} />
        <span className="text-xs text-muted-foreground">Plus</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Edit" size={24} />
        <span className="text-xs text-muted-foreground">Edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Trash2" size={24} />
        <span className="text-xs text-muted-foreground">Trash2</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Download" size={24} />
        <span className="text-xs text-muted-foreground">Download</span>
      </div>
    </div>
  ),
};

/**
 * 네비게이션 아이콘
 */
export const NavigationIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="ChevronLeft" size={24} />
      <Icon name="ChevronRight" size={24} />
      <Icon name="ChevronUp" size={24} />
      <Icon name="ChevronDown" size={24} />
    </div>
  ),
};
