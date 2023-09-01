import React from 'react';
import classNames from 'classnames';

interface RadioButtonProps {
  name: string;
  checked: boolean;
  label: string;
  size?: `small` | `large`;
  style?: `default` | `pill`;
  onClick?: () => void;
  onChange?: () => void;
}

const RadioButton = ({
  name,
  checked = false,
  label,
  size = `large`,
  style = `default`,
  onClick,
  onChange,
}: RadioButtonProps) => (
  <>
    <label className={classNames(`h-radio h-radio--animate`, {
      'h-checkbox--sm': size === `small`,
      'h-checkbox--lg': size === `large`,
      'h-radio-pill-button': style === `pill`,
    })}>
      <input
        className="h-radio__elm"
        type="radio"
        name={name}
        checked={checked}
        onClick={onClick}
        onChange={onChange}
      />
      <span className="h-radio__container"></span>
      <span className="h-radio__label ms-2">{label}</span>
      <span className="h-radio-pill-button-radio-fill"></span>
    </label>
  </>
);

export { RadioButton };
