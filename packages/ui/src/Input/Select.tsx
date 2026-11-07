import * as React from "react";
import { selectVariants, type SelectVariants } from "./select.variants";
import { cn } from "../utils";

export interface SelectOptionItem {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    SelectVariants {
  isError?: boolean;
  placeholder?: string;
  options?: SelectOptionItem[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      children,
      variant,
      inputSize = "default",
      state,
      isError,
      fullWidth,
      placeholder,
      options,
      disabled,
      defaultValue,
      value,
      ...props
    },
    ref,
  ) => {
    const computedState = isError ? "error" : state;

    return (
      <div
        className={cn(
          "relative inline-block",
          fullWidth !== false ? "w-full" : "w-auto",
        )}
      >
        <select
          ref={ref}
          disabled={disabled}
          defaultValue={
            placeholder && defaultValue === undefined && value === undefined
              ? ""
              : defaultValue
          }
          value={value}
          className={cn(
            selectVariants({
              variant,
              inputSize,
              state: computedState,
              fullWidth,
            }),
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options
            ? options.map((opt) => (
                <option
                  key={String(opt.value)}
                  value={opt.value}
                  disabled={opt.disabled}
                >
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-muted-foreground",
            disabled && "opacity-50",
          )}
        >
          <svg
            className="size-4 shrink-0 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";

export const SelectOption = React.forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>((props, ref) => <option ref={ref} {...props} />);
SelectOption.displayName = "SelectOption";

export const SelectGroup = React.forwardRef<
  HTMLOptGroupElement,
  React.OptgroupHTMLAttributes<HTMLOptGroupElement>
>((props, ref) => <optgroup ref={ref} {...props} />);
SelectGroup.displayName = "SelectGroup";
