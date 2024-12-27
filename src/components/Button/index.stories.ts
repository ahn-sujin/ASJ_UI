import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from ".";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    varient: {
      control: "select",
      options: ["primary", "secondary", "tertiary"], // buttonVariants에 맞게 수정
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"], // buttonSizes에 맞게 수정
    },
    fullWidth: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    varient: "primary", // 기본 variant
    size: "large", // 기본 size
    fullWidth: false, // 기본 fullWidth
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    varient: "primary",
    children: "Primary Button", // 버튼 텍스트를 children으로 설정
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
