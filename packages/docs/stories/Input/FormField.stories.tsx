import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FormField,
  Input,
  Select,
  RadioGroup,
  Radio,
  Checkbox,
  Switch,
  Button,
} from "@hack-ui/ui";

const meta = {
  title: "Input/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <FormField
        label="Full Name"
        htmlFor="name"
        required
        helperText="Enter your first and last name as shown on your ID."
      >
        <Input id="name" placeholder="Alex Morgan" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <FormField
        label="Email address"
        htmlFor="email"
        required
        error="Please provide a valid email address."
      >
        <Input
          id="email"
          type="email"
          isError
          defaultValue="invalid-address@"
        />
      </FormField>
    </div>
  ),
};

export const CompleteFormExample: Story = {
  name: "Complete Form",
  render: () => {
    const [tier, setTier] = React.useState("business");
    const [role, setRole] = React.useState("");

    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-96 p-6 border border-border rounded-xl bg-background shadow-sm space-y-4"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Account Setup
          </h3>
          <p className="text-xs text-muted-foreground">
            Configure your workspace settings and team preferences.
          </p>
        </div>

        <FormField label="Workspace Name" htmlFor="ws-name" required>
          <Input
            id="ws-name"
            placeholder="Acme Corp"
            defaultValue="Acme Studio"
          />
        </FormField>

        <FormField
          label="Primary Role"
          htmlFor="primary-role"
          required
          helperText="Select the option that best describes your function."
        >
          <Select
            id="primary-role"
            placeholder="Select your role..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={[
              { value: "developer", label: "Software Engineer" },
              { value: "designer", label: "Product Designer" },
              { value: "product", label: "Product Manager" },
              { value: "founder", label: "Founder / Executive" },
            ]}
          />
        </FormField>

        <FormField label="Billing Plan" required>
          <RadioGroup
            name="form-billing-plan"
            value={tier}
            onChange={setTier}
            orientation="vertical"
          >
            <Radio
              value="starter"
              label="Starter"
              description="$12 / member / month"
            />
            <Radio
              value="business"
              label="Business"
              description="$29 / member / month"
            />
          </RadioGroup>
        </FormField>

        <div className="pt-2 border-t border-border space-y-3">
          <Switch
            label="Auto-renew subscription"
            description="Billed automatically at the start of each period"
            defaultChecked
          />
          <Checkbox
            label="I agree to the terms of service"
            description="Read our terms and privacy policy"
            defaultChecked
          />
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="primary" type="submit">
            Save Preferences
          </Button>
        </div>
      </form>
    );
  },
};
