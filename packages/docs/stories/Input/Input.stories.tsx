import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Textarea } from "@hack-ui/ui";

const meta = {
  title: "Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "outline", "unstyled"],
      description: "Visual input style",
    },
    inputSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Input sizing",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    isError: {
      control: "boolean",
      description: "Applies error styling",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
  args: {
    variant: "default",
    inputSize: "default",
    disabled: false,
    isError: false,
    placeholder: "Enter text...",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder...",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled input...",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    placeholder: "Thick outline...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Input inputSize="sm" placeholder="Small (sm)" />
      <Input inputSize="default" placeholder="Default (md)" />
      <Input inputSize="lg" placeholder="Large (lg)" />
    </div>
  ),
};

export const WithAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Input
        placeholder="Search components..."
        startAdornment={
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>
        }
      />
      <Input
        type="password"
        placeholder="Password"
        endAdornment={
          <button
            type="button"
            className="hover:text-foreground transition-colors cursor-pointer"
            title="Toggle visibility"
          >
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              />
              <circle cx="12" cy="12" r="3" strokeWidth="2" />
            </svg>
          </button>
        }
      />
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    isError: true,
    defaultValue: "invalid-email@",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Read-only disabled content",
  },
};

export const TextareaExample: Story = {
  name: "Textarea",
  render: () => (
    <div className="w-80 flex flex-col gap-3">
      <Textarea placeholder="Type your message here..." rows={4} />
      <Textarea
        variant="filled"
        placeholder="Filled textarea variant..."
        rows={3}
      />
      <Textarea
        isError
        placeholder="Error textarea..."
        defaultValue="Invalid input content"
        rows={2}
      />
    </div>
  ),
};

