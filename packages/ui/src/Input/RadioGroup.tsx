import * as React from "react";
import { cn } from "../utils";
import type { RadioSize } from "./radio.variants";

export interface RadioGroupContextValue {
  name?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  disabled?: boolean;
  radioSize?: RadioSize;
  isError?: boolean;
}

export const RadioGroupContext =
  React.createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
  disabled?: boolean;
  radioSize?: RadioSize;
  isError?: boolean;
  orientation?: "vertical" | "horizontal";
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value: controlledValue,
      defaultValue,
      onChange,
      disabled,
      radioSize = "default",
      isError,
      orientation = "vertical",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | number | undefined
    >(defaultValue);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : uncontrolledValue;

    const generatedName = React.useId();
    const groupName = name || generatedName;

    const handleChange = React.useCallback(
      (val: string) => {
        if (!isControlled) {
          setUncontrolledValue(val);
        }
        onChange?.(val);
      },
      [isControlled, onChange],
    );

    const contextValue = React.useMemo<RadioGroupContextValue>(
      () => ({
        name: groupName,
        value: currentValue,
        onChange: handleChange,
        disabled,
        radioSize,
        isError,
      }),
      [groupName, currentValue, handleChange, disabled, radioSize, isError],
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="radiogroup"
          aria-invalid={isError}
          className={cn(
            "flex",
            orientation === "vertical"
              ? "flex-col gap-2.5"
              : "flex-row flex-wrap gap-4",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

RadioGroup.displayName = "RadioGroup";
