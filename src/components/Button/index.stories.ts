import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from ".";
import { buttonSizes, buttonVariants } from "../../styles/theme";

const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "이 버튼 컴포넌트는 다양한 스타일을 제공하며, 버튼 색상, 크기 및 풀 너비 옵션을 설정할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    varient: {
      description: "버튼의 색상을 변경할 수 있습니다.",
      table: {
        type: {
          summary: Object.keys(buttonVariants)
            .map((key) => `"${key}"`)
            .join(" | "),
        },
        defaultValue: { summary: "primary" },
      },
      control: "select",
      options: Object.keys(buttonVariants),
    },
    size: {
      description: "버튼의 사이즈를 설정할 수 있습니다.",
      table: {
        type: {
          summary: Object.keys(buttonSizes)
            .map((key) => `"${key}"`)
            .join(" | "),
        },
        defaultValue: { summary: "large" },
      },
      control: "radio",
      options: Object.keys(buttonSizes),
    },
    fullWidth: { description: "width:100% 를 적용합니다.", control: "boolean" },
    children: { description: "버튼의 내용을 작성해주세요." },
    onClick: { action: "clicked" },
  },
  args: {
    varient: "primary",
    size: "large",
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    varient: "primary",
    children: "Primary Button", // 버튼 텍스트를 children으로 설정
  },
  parameters: {
    docs: {
      description: {
        story: "설명 설명",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    varient: "secondary",
    children: "Secondary Button", // 버튼 텍스트를 children으로 설정
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button", // 버튼 텍스트를 children으로 설정
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button", // 버튼 텍스트를 children으로 설정
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button", // 버튼 텍스트를 children으로 설정
  },
};
