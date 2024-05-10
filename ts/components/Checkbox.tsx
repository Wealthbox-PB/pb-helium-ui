import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `size` | `type`> {
  checked: boolean;
  indeterminate?: boolean;
  label?: string;
  labelClass?: string;
  size?: `small` | `large`;
}

const Checkbox = (
  { checked = false, indeterminate = false, label, labelClass, size, ...props }: CheckboxProps,
  ref,
) => {
  return (
    <label
      className={classNames(`h-checkbox h-checkbox--animate`, labelClass, {
        'h-checkbox--sm': size === `small`,
        'h-checkbox--lg': size === `large`,
      })}
    >
      <input
        className={classNames(`h-checkbox__elm`, {
          'h-checkbox__elm--indeterminate': indeterminate,
          'h-checkbox__elm--checked': checked,
        })}
        type="checkbox"
        checked={checked}
        ref={ref}
        {...props}
      />
      <span className="h-checkbox__container"></span>
      {label ? <span className="h-checkbox__label-content">{label}</span> : null}
    </label>
  );
};

const CheckboxRef = forwardRef(Checkbox);
export { CheckboxRef as Checkbox };
