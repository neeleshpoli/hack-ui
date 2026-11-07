import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@hack-ui/ui";

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
        "subtle",
        "success",
        "warning",
      ],
      description: "Visual button variant style",
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "default",
        "md",
        "lg",
        "xl",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-md",
        "icon-lg",
        "icon-xl",
      ],
      description: "Button size",
    },
    shape: {
      control: "select",
      options: ["default", "rounded", "pill", "square"],
      description: "Button corner radius shape",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button spans 100% width",
    },
    loading: {
      control: "boolean",
      description: "Shows a loading spinner and disables clicks",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    children: {
      control: "text",
      description: "Button label content",
    },
  },
  args: {
    variant: "primary",
    size: "default",
    shape: "default",
    fullWidth: false,
    loading: false,
    disabled: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Subtle Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Button",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default (MD)</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button shape="square">Square</Button>
      <Button shape="default">Default</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="pill">Pill</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Please wait...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};

