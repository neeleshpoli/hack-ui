import { P } from "@hack-ui/ui";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typograhy/P",
  component: P,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "small",
        "blockquote",
        "code",
      ],
      description: "Visual typography style variant",
    },
    color: {
      control: "select",
      options: ["default", "muted", "primary"],
      description: "Text color theme",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
  args: {
    color: "default",
    children: "This is text rendered with the <p> tag."
  }
} satisfies Meta<typeof P>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: 'H1',
  args: {
    variant: "h1"
  }
}
export const H2: Story = {
  name: 'H2',
  args: {
    variant: "h2"
  }
}

export const H3: Story = {
  name: 'H3',
  args: {
    variant: "h3"
  }
}

export const H4: Story = {
  name: 'H4',
  args: {
    variant: "h4"
  }
}

export const H5: Story = {
  name: 'H5',
  args: {
    variant: "h5"
  }
}

export const H6: Story = {
  name: 'H6',
  args: {
    variant: "h6"
  }
}

export const Small: Story = {
  args: {
    variant: "small"
  }
}

export const Blockquote: Story = {
  args: {
    variant: "blockquote"
  }
}

export const Code: Story = {
  args: {
    variant: "code"
  }
}

export const MutedColor: Story = {
  args: {
    color: "muted"
  }
}

export const PrimaryColor: Story = {name: 'Primary Color',
  args: {
    color: "primary"
  }
}