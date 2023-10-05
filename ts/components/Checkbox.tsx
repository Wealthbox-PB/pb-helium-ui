import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  labelClass?: string;
  name?: string;
  onChange?: (e: { checked: boolean; indeterminate: boolean }) => void;
  size?: `small` | `large`;
  value?: string;
}

const Checkbox = (
  {
    checked = false,
    disabled,
    indeterminate = false,
    label,
    labelClass,
    name,
    onChange,
    size,
    value,
  }: CheckboxProps,
  ref
) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);

  function handleCheckBoxChange() {
    if (isIndeterminate) {
      setIsChecked(true);
      setIsIndeterminate(false);
    } else {
      setIsChecked((prevChecked) => !prevChecked);
    }

    onChange?.({ checked: !isChecked, indeterminate: isIndeterminate });
  }

  return (
    <label
      className={classNames(`h-checkbox h-checkbox--animate`, labelClass, {
        'h-checkbox--sm': size === `small`,
        'h-checkbox--lg': size === `large`,
      })}
    >
      {name ? <input name={name} type="hidden" value={value} /> : null}
      <button
        disabled={disabled}
        ref={ref}
        type="button"
        className={classNames(`h-checkbox__elm`, {
          'h-checkbox__elm--indeterminate': indeterminate || isIndeterminate,
          'h-checkbox__elm--checked': checked || (isChecked && !isIndeterminate),
        })}
        onClick={handleCheckBoxChange}
      />
      <span className="h-checkbox__container"></span>
      {label ? <span className="h-checkbox__label-content">{label}</span> : null}
    </label>
  );
};

const CheckboxRef = forwardRef(Checkbox);
export { CheckboxRef as Checkbox };
