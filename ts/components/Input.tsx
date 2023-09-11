import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

interface InputProps {
  autofocus?: boolean;
  disabled?: boolean;
  inputClasses?: string;
  label?: string;
  labelClasses?: string;
  leftIconClass?: string;
  name?: string;
  onBlur?: (e) => void;
  onChange?: (e) => void;
  onFocus?: (e) => void;
  onRightIconClick?: (e) => void;
  placeholder?: string;
  rightIconClass?: string;
  role?: string;
  showRightIcon?: boolean;
  theme?: `light` | `dark`;
  type?: `text` | `password` | `email` | `tel` | `search`;
  value: string;
}

const Input = ({
  autofocus = false,
  disabled = false,
  inputClasses,
  label,
  labelClasses,
  leftIconClass,
  name,
  onBlur,
  onChange,
  onFocus,
  onRightIconClick,
  placeholder,
  rightIconClass,
  role = `textbox`,
  showRightIcon = true,
  theme = `light`,
  type = "text",
  value
}: InputProps) => {
  const input = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (input.current && autofocus) {
      input.current.focus();
    }
  }, []);

  return (
    <label className="h-width-100">
      {label ?
        <span className={classNames(`h-input-label`, labelClasses, { 'h-color-text-blue-200': theme === 'dark' })}>
          {label}
        </span>
        :
        null
      }
      <div className="h-input-container">
        <input
          disabled={disabled}
          type={type}
          ref={input}
          name={name}
          aria-label={name}
          className={classNames(`h-input`,
            inputClasses,
            {
              'h-input--icon': leftIconClass,
              'h-input--dark': theme === `dark`,
            })}
          placeholder={placeholder}
          role={role}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></input>
        {leftIconClass ?
          <span
            aria-hidden="true"
            className={classNames(
              `h-input__icon--left`
              , leftIconClass,
              {
                'h-color-text-blue-200': theme === 'dark',
                'h-color-text-gray-500': theme === 'light'
              }
            )}
          ></span>
          :
          null
        }
        {rightIconClass && showRightIcon ?
          <button
            type="reset"
            name="Clear Search"
            aria-label="Clear Search"
            onClick={onRightIconClick}
            className={classNames(
              `h-input__icon--right`
              , rightIconClass,
              {
                'h-color-text-blue-200': theme === 'dark',
                'h-color-text-gray-500': theme === 'light'
              },
            )}
          ></button>
          :
          null
        }
      </div>
    </label>
  );
};

export { Input };
