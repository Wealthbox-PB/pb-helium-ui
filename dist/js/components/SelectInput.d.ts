import React, { ButtonHTMLAttributes } from 'react';
import { ButtonType } from './Button';
interface SelectInputProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `placeholder` | `value`> {
    label?: string;
    labelClassName?: string;
    placeholder?: string | false | null;
    type?: ButtonType;
    value?: string | null;
}
declare const SelectInputRef: React.ForwardRefExoticComponent<SelectInputProps & React.RefAttributes<unknown>>;
export { SelectInputRef as SelectInput };
