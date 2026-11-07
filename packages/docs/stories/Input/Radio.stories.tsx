import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, RadioGroup } from "@hack-ui/ui";

const meta = {
  title: "Input/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radioSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size of the radio button",
    },
    disabled: {
      control: "boolean",
      description: "Disables the radio button",
    },
    isError: {
      control: "boolean",
      description: "Applies error styling",
    },
    label: {
      control: "text",
      description: "Radio label text",
    },
    description: {
      control: "text",
      description: "Supporting helper text under the label",
    },
  },
  args: {
    label: "Option 1",
    radioSize: "default",
    disabled: false,
    isError: false,
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Radio",
    value: "option1",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Notifications",
    description: "Receive push notifications on this device",
    value: "notifications",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    description: "This option is currently unavailable",
    disabled: true,
    value: "disabled",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Invalid Selection",
    description: "Please choose an eligible option",
    isError: true,
    value: "error",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio
        radioSize="sm"
        label="Small Radio (sm)"
        name="size-demo"
        defaultChecked
      />
      <Radio
        radioSize="default"
        label="Default Radio (default / md)"
        name="size-demo"
      />
      <Radio radioSize="lg" label="Large Radio (lg)" name="size-demo" />
    </div>
  ),
};

export const RadioGroupVertical: Story = {
  name: "RadioGroup (Vertical)",
  render: () => {
    const [selected, setSelected] = React.useState("pro");

    return (
      <div className="w-80 p-4 border border-border rounded-lg bg-background">
        <h4 className="font-semibold text-sm mb-3">Subscription Plan</h4>
        <RadioGroup
          name="subscription-plan"
          value={selected}
          onChange={setSelected}
          orientation="vertical"
        >
          <Radio
            value="free"
            label="Free Tier"
            description="Up to 3 projects, community support"
          />
          <Radio
            value="pro"
            label="Pro Tier ($29/mo)"
            description="Unlimited projects, priority support, advanced analytics"
          />
          <Radio
            value="enterprise"
            label="Enterprise"
            description="Custom SLA, dedicated manager, SSO"
          />
        </RadioGroup>
        <p className="mt-4 text-xs text-muted-foreground">
          Selected plan:{" "}
          <span className="font-semibold text-foreground">{selected}</span>
        </p>
      </div>
    );
  },
};

export const RadioGroupHorizontal: Story = {
  name: "RadioGroup (Horizontal)",
  render: () => {
    const [gender, setGender] = React.useState("female");

    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Select Gender</label>
        <RadioGroup
          name="gender"
          value={gender}
          onChange={setGender}
          orientation="horizontal"
        >
          <Radio value="female" label="Female" />
          <Radio value="male" label="Male" />
          <Radio value="non-binary" label="Non-binary" />
          <Radio value="other" label="Prefer not to say" />
        </RadioGroup>
      </div>
    );
  },
};
