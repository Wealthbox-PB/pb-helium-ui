import React, { useRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { randomString } from '../helpers/random_string';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Controls the radio button size. */
  buttonSize?: `small` | `large`;
  /** Set the label content. */
  label?: string;
  /** Controls the radio button variant. */
  variant?: `default` | `pill`;
}

const RadioButton = (
  {
    disabled,
    id = randomString(),
    label,
    buttonSize = `large`,
    variant = `default`,
    ...rest
  }: RadioButtonProps,
  ref,
) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <label
      data-testid="h-radio"
      className={classNames(`h-radio h-radio--animate`, {
        'h-radio--sm': buttonSize === `small`,
        'h-radio--lg': buttonSize === `large`,
        'h-radio--pill-button': variant === `pill`,
      })}
    >
      <input
        ref={ref}
        className="h-radio__elm"
        disabled={disabled}
        id={id ? id : uniqueIDRef.current}
        type="radio"
        {...rest}
      />
      <span className="h-radio__container"></span>
      {label ? (
        <Label
          labelClassName={
            disabled ? `h-radio__label-content h-color-text-gray-500` : `h-radio__label-content`
          }
          htmlFor={id ? id : uniqueIDRef.current}
        >
          {label}
        </Label>
      ) : null}
      <span className="h-radio__pill-button-radio-fill"></span>
    </label>
  );
};

const RadioButtonRef = React.forwardRef(RadioButton);

export { RadioButtonRef as RadioButton };
