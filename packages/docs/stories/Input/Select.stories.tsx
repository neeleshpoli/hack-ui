import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, SelectOption, SelectGroup } from "@hack-ui/ui";

const meta = {
  title: "Input/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "outline"],
      description: "Visual styling variant",
    },
    inputSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size of the select dropdown",
    },
    disabled: {
      control: "boolean",
      description: "Disables the dropdown",
    },
    isError: {
      control: "boolean",
      description: "Applies error styling",
    },
    fullWidth: {
      control: "boolean",
      description: "Expands select to 100% width",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when no option is chosen",
    },
  },
  args: {
    variant: "default",
    inputSize: "default",
    disabled: false,
    isError: false,
    fullWidth: false,
    placeholder: "Choose a framework...",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworkOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solid", label: "SolidJS", disabled: true },
];

export const Default: Story = {
  args: {
    options: frameworkOptions,
  },
};

export const FilledVariant: Story = {
  args: {
    variant: "filled",
    options: frameworkOptions,
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: "outline",
    options: frameworkOptions,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <div>
        <label className="text-xs font-medium mb-1 block">Small (sm)</label>
        <Select
          inputSize="sm"
          options={frameworkOptions}
          placeholder="Select small..."
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Default (md)</label>
        <Select
          inputSize="default"
          options={frameworkOptions}
          placeholder="Select default..."
        />
      </div>
      <div>
        <label className="text-base font-medium mb-1 block">Large (lg)</label>
        <Select
          inputSize="lg"
          options={frameworkOptions}
          placeholder="Select large..."
        />
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    isError: true,
    options: frameworkOptions,
    placeholder: "Selection required...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: frameworkOptions,
    placeholder: "Disabled dropdown",
  },
};

export const WithOptgroups: Story = {
  name: "With Option Groups",
  render: () => (
    <div className="w-80">
      <Select defaultValue="sf">
        <SelectGroup label="United States">
          <SelectOption value="sf">San Francisco</SelectOption>
          <SelectOption value="nyc">New York</SelectOption>
          <SelectOption value="sea">Seattle</SelectOption>
        </SelectGroup>
        <SelectGroup label="Europe">
          <SelectOption value="lon">London</SelectOption>
          <SelectOption value="ber">Berlin</SelectOption>
          <SelectOption value="par">Paris</SelectOption>
        </SelectGroup>
        <SelectGroup label="Asia">
          <SelectOption value="tok">Tokyo</SelectOption>
          <SelectOption value="sin">Singapore</SelectOption>
        </SelectGroup>
      </Select>
    </div>
  ),
};
