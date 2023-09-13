import React, { useRef } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { randomString } from '../helpers/random_string';

interface RadioButtonProps {
  autofocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  name: string;
  onChange?: () => void;
  onClick?: () => void;
  size?: `small` | `large`;
  variant?: `default` | `pill`;
}

const RadioButton = ({
  autofocus = false,
  checked,
  disabled,
  id = randomString(),
  label,
  name,
  onChange,
  onClick,
  size = `large`,
  variant = `default`,
}: RadioButtonProps) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <label
      data-testid="h-radio"
      className={classNames(`h-radio h-radio--animate`, {
        'h-radio--sm': size === `small`,
        'h-radio--lg': size === `large`,
        'h-radio--pill-button': variant === `pill`,
      })}>
      <input
        autoFocus={autofocus}
        checked={checked}
        className="h-radio__elm"
        disabled={disabled}
        id={id ? id : uniqueIDRef.current}
        name={name}
        onChange={onChange}
        onClick={onClick}
        type="radio"
      />
      <span className="h-radio__container"></span>
      {label ?
        <Label
          labelClassName={disabled ? `h-radio__label-content h-color-text-gray-500` : `h-radio__label-content`}
          htmlFor={id ? id : uniqueIDRef.current}>
          {label}
        </Label>
        :
        null
      }
      <span className="h-radio__pill-button-radio-fill"></span>
    </label>
  );
};

export { RadioButton };
