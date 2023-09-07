import React from 'react';
import classNames from 'classnames';

interface RadioButtonProps {
  autofocus?: boolean;
  checked: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  onChange?: () => void;
  onClick?: () => void;
  size?: `small` | `large`;
  variant?: `default` | `pill`;
}

const RadioButton = ({
  autofocus = false,
  checked = false,
  disabled = false,
  label,
  name,
  onChange,
  onClick,
  size = `large`,
  variant = `default`,
}: RadioButtonProps) => (
  <>
    <label className={classNames(`h-radio h-radio--animate`, {
      'h-radio--sm': size === `small`,
      'h-radio--lg': size === `large`,
      'h-radio-pill-button': variant === `pill`,
    })}>
      <input
        autoFocus={autofocus}
        className="h-radio__elm"
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
        onChange={onChange}
      />
      <span className="h-radio__container"></span>
      <span className={classNames(`h-radio__label ms-2`, { 'h-color-text-gray-500': disabled })}>{label}</span>
      <span className="h-radio-pill-button-radio-fill"></span>
    </label>
  </>
);

export { RadioButton };
