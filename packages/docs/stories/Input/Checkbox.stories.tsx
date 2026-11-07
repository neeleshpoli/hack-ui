import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@hack-ui/ui";

const meta = {
  title: "Input/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checkboxSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Checkbox size",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox",
    },
    indeterminate: {
      control: "boolean",
      description: "Shows an indeterminate dash indicator",
    },
    isError: {
      control: "boolean",
      description: "Applies error styling",
    },
    label: {
      control: "text",
      description: "Label next to the checkbox",
    },
    description: {
      control: "text",
      description: "Supporting description",
    },
  },
  args: {
    label: "Accept terms and conditions",
    checkboxSize: "default",
    disabled: false,
    indeterminate: false,
    isError: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Remember me",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description:
      "Receive emails about new features, security updates, and releases.",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Select all items",
    description: "3 of 7 items selected",
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox checkboxSize="sm" label="Small Checkbox (sm)" defaultChecked />
      <Checkbox
        checkboxSize="default"
        label="Default Checkbox (md)"
        defaultChecked
      />
      <Checkbox checkboxSize="lg" label="Large Checkbox (lg)" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
    defaultChecked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "You must accept the privacy policy to continue",
    isError: true,
  },
};
