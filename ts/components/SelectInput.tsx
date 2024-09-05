import React, { useRef, ButtonHTMLAttributes } from 'react';
import { Label } from './Label';
import { Button, ButtonType } from './Button';
import { randomString } from '../helpers/random_string';
import classNames from 'classnames';

interface SelectInputProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `placeholder` | `value`> {
  /** Sets a label for the button. */
  label?: string;
  /** Adds class names to the label. */
  labelClassName?: string;
  /** Displays the correct label styling for multiselect menus */
  multiSelect?: boolean;
  /** Sets the button placeholder. */
  placeholder?: string | false | null;
  /** Controls the type of the button. */
  type?: ButtonType;
  /** Sets the value of the button. */
  value?: string | any[] | null;
}

const SelectInput = (
  {
    className,
    id = randomString(),
    label,
    labelClassName,
    multiSelect = false,
    placeholder = `Select...`,
    type = `button`,
    value,
    ...props
  }: SelectInputProps,
  ref,
) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <>
      {label ? (
        <Label labelClassName={labelClassName} htmlFor={id ? id : uniqueIDRef.current}>
          {label}
        </Label>
      ) : null}
      <Button
        id={id ? id : uniqueIDRef.current}
        type={type}
        ref={ref}
        className={classNames(`h-select h-align-start h-font-weight-normal h-color-text-darker`, className, {
          'py-0': multiSelect,
        })}
        variant={null}
        {...props}
      >
        {multiSelect ? (
          <div className="h-overflow-hidden d-flex align-items-center text-nowrap">
            {value?.length && Array.isArray(value) ? (
              value.map((item, i) => (
                <span
                  key={i}
                  className="py-1 px-2 h-border-radius h-color-background-blue-100 me-1 h-font-size-sm"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="h-text-ellipsis">{placeholder}</span>
            )}
          </div>
        ) : (
          <span className="h-text-ellipsis">{value || placeholder}</span>
        )}
      </Button>
    </>
  );
};

const SelectInputRef = React.forwardRef(SelectInput);

export { SelectInputRef as SelectInput };
