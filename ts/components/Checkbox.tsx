import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className` | `size` | `type`> {
  checked: boolean;
  className?: string;
  indeterminate?: boolean;
  inputClassName?: string;
  label?: string;
  labelClassName?: string;
  size?: `sm` | `md` | `lg`;
}

const Checkbox = (
  {
    checked = false,
    className,
    indeterminate = false,
    inputClassName,
    label,
    labelClassName,
    size,
    ...props
  }: CheckboxProps,
  ref,
) => {
  return (
    <label
      className={classNames(`h-checkbox h-checkbox--animate`, className, {
        [`h-checkbox--${size}`]: size,
      })}
    >
      <input
        className={classNames(`h-checkbox__elm`, inputClassName, {
          'h-checkbox__elm--indeterminate': indeterminate,
          'h-checkbox__elm--checked': checked,
        })}
        type="checkbox"
        checked={checked}
        ref={ref}
        {...props}
      />
      <span className="h-checkbox__container"></span>
      {label ? (
        <span className={classNames(`h-checkbox__label-content`, labelClassName)}>{label}</span>
      ) : null}
    </label>
  );
};

const CheckboxRef = forwardRef(Checkbox);
export { CheckboxRef as Checkbox };
