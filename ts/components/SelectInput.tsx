import React, { useRef, ButtonHTMLAttributes } from 'react';
import { Label } from './Label';
import { Button, ButtonType } from './Button';
import { randomString } from '../helpers/random_string';
import classNames from 'classnames';

interface SelectInputProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `placeholder` | `value`> {
  label?: string;
  labelClassName?: string;
  placeholder?: string | false | null;
  type?: ButtonType;
  value?: string | null;
}

const SelectInput = (
  {
    className,
    id = randomString(),
    label,
    labelClassName,
    placeholder = `Select...`,
    type = `button`,
    value,
    ...props
  }: SelectInputProps,
  ref
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
        className={classNames(`h-select h-align-start h-font-weight-normal h-color-text-darker`, className)}
        variant={null}
        {...props}
      >
        <span className="h-text-ellipsis">{value || placeholder}</span>
      </Button>
    </>
  );
};

const SelectInputRef = React.forwardRef(SelectInput);

export { SelectInputRef as SelectInput };
