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
    <>
      <label className="w-100">
        {label ?
          <span className={classNames(`d-inline-block mb-2`, labelClasses, { 'h-color-text-blue-200': theme === 'dark' })}>
            {label}
          </span>
          :
          null
        }
        <div className="d-flex">
          <div className="h-input-container h-color-text-gray-500">
            <input
              disabled={disabled}
              type={type}
              ref={input}
              role="searchbox"
              name={name}
              aria-label={name}
              className={classNames(`h-input`,
                inputClasses,
                {
                  'h-input--icon': leftIconClass,
                  'h-input--dark': theme === `dark`,
                })}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            ></input>
            {leftIconClass ?
              <span
                aria-hidden="true"
                className={classNames(
                  `position-absolute ml-2 h-input-icon-left h-icon-font-size-md`
                  , leftIconClass,
                  { 'h-color-text-blue-200': theme === 'dark' }
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
                  `"ml-2 h-input-icon-right h-icon-font-size-md position-absolute`
                  , rightIconClass,
                  { 'h-color-text-blue-200': theme === 'dark' }
                )}
              ></button>
              :
              null
            }
          </div>
        </div>
      </label>
    </>
  );
};

export { Input };
