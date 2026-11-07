import * as React from "react";
import {
  radioVariants,
  radioDotVariants,
  type RadioVariants,
  type RadioSize,
} from "./radio.variants";
import { RadioGroupContext } from "./RadioGroup";
import { cn } from "../utils";

export interface RadioProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    RadioVariants {
  label?: React.ReactNode;
  description?: React.ReactNode;
  isError?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      id: customId,
      name: customName,
      value,
      checked: controlledChecked,
      defaultChecked,
      onChange,
      disabled: customDisabled,
      radioSize: customRadioSize,
      state: customState,
      isError: customIsError,
      label,
      description,
      ...props
    },
    ref,
  ) => {
    const groupContext = React.useContext(RadioGroupContext);
    const autoId = React.useId();
    const id = customId || autoId;

    const name = customName ?? groupContext?.name;
    const disabled = customDisabled ?? groupContext?.disabled;
    const radioSize: RadioSize =
      customRadioSize ?? groupContext?.radioSize ?? "default";
    const isError = customIsError ?? groupContext?.isError;

    const isChecked =
      groupContext?.value !== undefined && value !== undefined
        ? String(groupContext.value) === String(value)
        : controlledChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (groupContext?.onChange && value !== undefined) {
        groupContext.onChange(String(value));
      }
    };

    const computedState = isError ? "error" : customState;

    const radioControl = (
      <span className="relative inline-flex items-center justify-center">
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          className={cn(
            radioVariants({
              radioSize,
              state: computedState,
            }),
            className,
          )}
        >
          <span
            className={cn(
              radioDotVariants({ radioSize }),
              "scale-0 peer-checked:scale-100 transition-transform duration-150",
            )}
          />
        </span>
      </span>
    );

    if (!label && !description) {
      return radioControl;
    }

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-2.5 cursor-pointer select-none",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="mt-0.5">{radioControl}</span>
        <span className="flex flex-col text-sm">
          {label && (
            <span className="font-medium text-foreground leading-snug">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground leading-normal mt-0.5">
              {description}
            </span>
          )}
        </span>
      </label>
    );
  },
);

Radio.displayName = "Radio";
