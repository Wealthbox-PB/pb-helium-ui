import React, { useRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { randomString } from '../helpers/random_string';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id?: string;
  label?: string;
  onChange?: () => void;
  onClick?: () => void;
  buttonSize?: `small` | `large`;
  variant?: `default` | `pill`;
}

const RadioButton = ({
  disabled,
  id = randomString(),
  label,
  onChange,
  onClick,
  buttonSize = `large`,
  variant = `default`,
  ...rest
}: RadioButtonProps) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <label
      data-testid="h-radio"
      className={classNames(`h-radio h-radio--animate`, {
        'h-radio--sm': buttonSize === `small`,
        'h-radio--lg': buttonSize === `large`,
        'h-radio--pill-button': variant === `pill`,
      })}>
      <input
        className="h-radio__elm"
        disabled={disabled}
        id={id ? id : uniqueIDRef.current}
        onChange={onChange}
        onClick={onClick}
        type="radio"
        {...rest}
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
