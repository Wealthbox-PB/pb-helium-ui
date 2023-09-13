import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';

interface InputProps {
  autofocus?: boolean;
  disabled?: boolean;
  id?: string;
  inputClassName?: string;
  label?: string;
  labelClassName?: string;
  leftIconClassName?: string;
  name?: string;
  onBlur?: (e) => void;
  onChange?: (e) => void;
  onFocus?: (e) => void;
  onRightButtonClick?: (e) => void;
  placeholder?: string;
  rightButtonClassName?: string;
  role?: string;
  showLeftIcon?: boolean;
  showRightButton?: boolean;
  variant?: `default` | `dark-blue`;
  inputType?: `text` | `password` | `email` | `tel` | `search`;
  value: string;
}

const Input = ({
  autofocus = false,
  disabled = false,
  id,
  inputClassName,
  label,
  labelClassName = ``,
  leftIconClassName,
  name,
  onBlur,
  onChange,
  onFocus,
  onRightButtonClick,
  placeholder,
  rightButtonClassName,
  role = `textbox`,
  showLeftIcon = true,
  showRightButton = true,
  variant = `default`,
  inputType = `text`,
  value
}: InputProps) => {
  const input = useRef<HTMLInputElement | null>(null);
  const uniqueID = useRef<string>(randomString());

  useEffect(() => {
    if (input.current && autofocus) {
      input.current.focus();
    }
  }, []);

  return (
    <label className="h-width-100">
      {label ?
        <Label
          labelClassName={variant === `dark-blue` ? `h-color-text-blue-200 ${labelClassName}` : labelClassName}
          htmlFor={id ? id : uniqueID.current}>
          {label}
        </Label>
        :
        null
      }
      <div className="h-input-container">
        <input
          id={id ? id : uniqueID.current}
          disabled={disabled}
          type={inputType}
          ref={input}
          name={name}
          aria-label={name}
          className={classNames(`h-input`,
            inputClassName,
            {
              'h-input--with-icon': leftIconClassName && showLeftIcon,
              'h-input--dark-blue': variant === `dark-blue`,
            })}
          placeholder={placeholder}
          role={role}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></input>
        {leftIconClassName && showLeftIcon ?
          <span
            aria-hidden="true"
            className={classNames(
              `h-input__icon--left`
              , leftIconClassName,
              {
                'h-color-text-blue-200': variant === 'dark-blue',
                'h-color-text-gray-500': variant === 'default'
              }
            )}
          ></span>
          :
          null
        }
        {rightButtonClassName && showRightButton ?
          <button
            type="reset"
            name="Clear Search"
            aria-label="Clear Search"
            onClick={onRightButtonClick}
            className={classNames(
              `h-input__icon--right`
              , rightButtonClassName,
              {
                'h-color-text-blue-200': variant === 'dark-blue',
                'h-color-text-gray-500': variant === 'default'
              },
            )}
          ></button>
          :
          null
        }
      </div>
    </label >
  );
};

export { Input };
