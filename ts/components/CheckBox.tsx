import React, { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames';

interface CheckBoxProps {
  checked?: boolean;
  name?: string;
  label?: string;
  labelClass?: string;
  size?: `small` | `large`;
  value?: React.InputHTMLAttributes<HTMLInputElement>[`value`];
  disabled?: boolean;
  onChange: (e) => void;
}

const CheckBox = (
  { name, value, checked = false, label, labelClass, size, disabled = false, onChange }: CheckBoxProps,
  ref
) => {
  const [isChecked, setIsChecked] = useState(!!checked);

  function handleCheckBoxChange(e) {
    if (value === ``) {
      setIsChecked(false);
    } else {
      setIsChecked(!value);
    }
    onChange(e);
  }

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label
      className={classNames(`h-checkbox h-checkbox--animate`, labelClass, {
        'h-checkbox--sm': size === `small`,
        'h-checkbox--lg': size === `large`,
      })}
    >
      <input name={name} type="hidden" value="0" />
      <input
        name={name}
        type="checkbox"
        value={value}
        className="h-checkbox__elm"
        checked={isChecked}
        onChange={handleCheckBoxChange}
        disabled={disabled}
        ref={ref}
      />
      <span className="h-checkbox__container"></span>
      {label ? <span className="h-checkbox__label-content">{label}</span> : null}
    </label>
  );
};

const CheckBoxRef = forwardRef(CheckBox);
export { CheckBoxRef as CheckBox };
