import React, { useRef, ButtonHTMLAttributes } from 'react';
import { Label } from './Label';
import { Button, ButtonType } from './Button';
import { randomString } from '../helpers/random_string';
import classNames from 'classnames';

interface SelectInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  type?: ButtonType;
}

const SelectInput = ({
  className,
  id = randomString(),
  label,
  labelClassName,
  placeholder,
  value,
  type = "button",
  ...rest
}: SelectInputProps,
  ref
) => {
  const uniqueIDRef = useRef<string>(randomString());

  return (
    <>
      {label ?
        <Label
          labelClassName={labelClassName}
          htmlFor={id ? id : uniqueIDRef.current}>
          {label}
        </Label>
        :
        null
      }
      <Button
        id={id ? id : uniqueIDRef.current}
        type={type}
        ref={ref}
        className={classNames(`h-select h-align-start`, className)}
        {...rest}
      >
        {value ?
          <span className="h-color-text-darker h-font-weight-normal">{value}</span>
          :
          <span className="h-color-text-lighter h-font-weight-normal">{placeholder}</span>
        }
      </Button>
    </>
  );
};

const SelectInputRef = React.forwardRef(SelectInput);

export { SelectInputRef as SelectInput };
