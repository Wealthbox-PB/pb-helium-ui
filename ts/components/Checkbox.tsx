import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className` | `size` | `type`> {
  /** Set the checkbox state. */
  checked: boolean;
  /** Set the checkbox wrapping html label class name. */
  className?: string;
  /** Set the checkbox visual state to indeterminate. */
  indeterminate?: boolean;
  /** Set the checkbox input class name. */
  inputClassName?: string;
  /** Set the checkbox text label content. */
  label?: string;
  /** Set the checkbox text label class name. */
  labelClassName?: string;
  /** Controls the checkbox size. */
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
