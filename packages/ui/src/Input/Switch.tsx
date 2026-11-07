import * as React from "react";
import {
  switchTrackVariants,
  switchThumbVariants,
  type SwitchVariants,
} from "./switch.variants";
import { cn } from "../utils";

export interface SwitchProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    SwitchVariants {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      id: customId,
      checked,
      defaultChecked,
      disabled,
      switchSize = "default",
      variant,
      label,
      description,
      onChange,
      ...props
    },
    ref,
  ) => {
    const autoId = React.useId();
    const id = customId || autoId;

    const switchControl = (
      <span className="relative inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          className="peer sr-only"
          {...props}
        />
        <span
          className={cn(
            switchTrackVariants({
              switchSize,
              variant,
            }),
            className,
          )}
        >
          <span className={cn(switchThumbVariants({ switchSize }))} />
        </span>
      </span>
    );

    if (!label && !description) {
      return switchControl;
    }

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-3 cursor-pointer select-none",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="mt-0.5">{switchControl}</span>
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

Switch.displayName = "Switch";
