import * as React from "react";
import { checkboxVariants, type CheckboxVariants } from "./checkbox.variants";
import { cn } from "../utils";

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    CheckboxVariants {
  label?: React.ReactNode;
  description?: React.ReactNode;
  indeterminate?: boolean;
  isError?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      id: customId,
      checked,
      defaultChecked,
      indeterminate = false,
      disabled,
      checkboxSize = "default",
      state,
      isError,
      label,
      description,
      onChange,
      ...props
    },
    ref,
  ) => {
    const autoId = React.useId();
    const id = customId || autoId;
    const innerRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const computedState = isError ? "error" : state;

    const checkboxControl = (
      <span className="relative inline-flex items-center justify-center">
        <input
          ref={innerRef}
          type="checkbox"
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          className="peer sr-only"
          {...props}
        />
        <span
          data-indeterminate={indeterminate ? "true" : undefined}
          className={cn(
            checkboxVariants({
              checkboxSize,
              state: computedState,
            }),
            className,
          )}
        >
          {indeterminate ? (
            <svg
              className="fill-none stroke-current stroke-[2.5]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
            <svg
              className="fill-none stroke-current stroke-[2.5] opacity-0 transition-opacity peer-checked:opacity-100"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
      </span>
    );

    if (!label && !description) {
      return checkboxControl;
    }

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-2.5 cursor-pointer select-none",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="mt-0.5">{checkboxControl}</span>
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

Checkbox.displayName = "Checkbox";
