import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

interface InputProps {
  autofocus?: boolean;
  disabled?: boolean;
  iconClass?: string;
  inputClasses?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: `text` | `password | email` | `tel` | `search`;
  value: string;
  onBlur?: (e) => void;
  onChange?: (e) => void;
  onClearSearch?: (e) => void;
  onFocus?: (e) => void;
}

const Input = ({
  autofocus = false,
  disabled = false,
  iconClass,
  inputClasses,
  label,
  name,
  placeholder,
  type = "text",
  value,
  onBlur,
  onChange,
  onClearSearch,
  onFocus,
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
          <span className="d-inline-block mb-2">{label}</span>
          :
          null
        }
        <div className="d-flex">
          <div className="h-input-container">
            {iconClass ?
              <span
                aria-hidden="true"
                className={classNames(
                  `position-absolute ml-2 h-icon-search h-input--search__icon h-icon-font-size-md`,
                  `h-color-text-gray-500`
                )}
              ></span>
              :
              null
            }
            <input
              disabled={disabled}
              type={type}
              ref={input}
              role="searchbox"
              name={name}
              aria-label={name}
              className={classNames(`h-input`, inputClasses)}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            ></input>
            {onClearSearch && value.length > 0 ?
              <button
                type="reset"
                name="Clear Search"
                aria-label="Clear Search"
                onClick={onClearSearch}
                className="ml-2 h-icon-delete h-input__clear-icon h-icon-font-size-md h-color-text-gray-500"
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
