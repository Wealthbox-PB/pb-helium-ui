import React, { useRef, InputHTMLAttributes } from 'react';
import { Label } from './Label';
import classNames from 'classnames';
import { randomString } from '../helpers/random_string';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelClassName?: string;
  leftIconClassName?: string;
  onRightButtonClick?: (e) => void;
  rightButtonClassName?: string;
  showLeftIcon?: boolean;
  showRightButton?: boolean;
  variant?: `default` | `dark-blue`;
  inputType?: `text` | `password` | `email` | `tel` | `search`;
}

const TextInput = ({
  id = randomString(),
  className,
  inputType = `text`,
  label,
  labelClassName = ``,
  leftIconClassName,
  onRightButtonClick,
  rightButtonClassName,
  role = `textbox`,
  showLeftIcon = true,
  showRightButton = true,
  variant = `default`,
  ...rest
}: TextInputProps,
  ref
) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <>
      {label ?
        <Label
          labelClassName={variant === `dark-blue` ? `h-color-text-blue-200 ${labelClassName}` : labelClassName}
          htmlFor={id ? id : uniqueIDRef.current}>
          {label}
        </Label>
        :
        null
      }
      <div className="h-input-container">
        <input
          id={id ? id : uniqueIDRef.current}
          type={inputType}
          ref={ref}
          className={classNames(`h-input`,
            className,
            {
              'h-input--with-icon': leftIconClassName && showLeftIcon,
              'h-input--dark-blue': variant === `dark-blue`,
            })}
          role={role}
          {...rest}
        ></input>
        {leftIconClassName && showLeftIcon ?
          <span
            data-testid="h-input__icon--left"
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
    </>
  );
};

const TextInputRef = React.forwardRef(TextInput);

export { TextInputRef as TextInput };
