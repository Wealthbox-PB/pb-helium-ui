import React, { useEffect, useRef } from 'react';
import { Label } from './Label';
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
  onRightButtonClick?: (e) => void;
  placeholder?: string;
  rightButtonClass?: string;
  role?: string;
  showLeftIcon?: boolean;
  showRightButton?: boolean;
  theme?: `light` | `dark`;
  type?: `text` | `password` | `email` | `tel` | `search`;
  value: string;
}

const Input = ({
  autofocus = false,
  disabled = false,
  inputClasses,
  label,
  labelClasses = ``,
  leftIconClass,
  name,
  onBlur,
  onChange,
  onFocus,
  onRightButtonClick,
  placeholder,
  rightButtonClass,
  role = `textbox`,
  showLeftIcon = true,
  showRightButton = true,
  theme = `light`,
  type = "text",
  value
}: InputProps) => {
  const id = self.crypto.randomUUID();
  const input = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    if (input.current && autofocus) {
      input.current.focus();
    }
  }, []);

  return (
    <label className="h-width-100">
      {label ?
        <Label labelText={label} labelClassName={theme === `dark` ? `h-color-text-blue-200 ${labelClasses}` : labelClasses} htmlFor={id}></Label>
        :
        null
      }
      <div className="h-input-container">
        <input
          id={id}
          disabled={disabled}
          type={type}
          ref={input}
          name={name}
          aria-label={name}
          className={classNames(`h-input`,
            inputClasses,
            {
              'h-input--with-icon': leftIconClass && showLeftIcon,
              'h-input--dark': theme === `dark`,
            })}
          placeholder={placeholder}
          role={role}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></input>
        {leftIconClass && showLeftIcon ?
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
        {rightButtonClass && showRightButton ?
          <button
            type="reset"
            name="Clear Search"
            aria-label="Clear Search"
            onClick={onRightButtonClick}
            className={classNames(
              `h-input__icon--right`
              , rightButtonClass,
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
    </label >
  );
};

export { Input };
