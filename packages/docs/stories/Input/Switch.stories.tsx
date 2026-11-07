import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@hack-ui/ui";

const meta = {
  title: "Input/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    switchSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Switch sizing",
    },
    variant: {
      control: "select",
      options: ["default", "success", "destructive"],
      description: "Color variant when toggled on",
    },
    disabled: {
      control: "boolean",
      description: "Disables the switch",
    },
    label: {
      control: "text",
      description: "Switch label",
    },
    description: {
      control: "text",
      description: "Supporting text",
    },
  },
  args: {
    label: "Airplane Mode",
    switchSize: "default",
    variant: "default",
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Two-factor authentication",
    description:
      "Require an authenticator app code when signing into your account.",
    defaultChecked: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch variant="default" label="Primary / Default" defaultChecked />
      <Switch variant="success" label="Success Variant" defaultChecked />
      <Switch
        variant="destructive"
        label="Destructive Variant"
        defaultChecked
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch switchSize="sm" label="Small switch (sm)" defaultChecked />
      <Switch switchSize="default" label="Default switch (md)" defaultChecked />
      <Switch switchSize="lg" label="Large switch (lg)" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Syncing disabled",
    disabled: true,
    defaultChecked: true,
  },
};
