import React, { ButtonHTMLAttributes } from 'react';
import { ButtonType } from './Button';
interface SelectInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    labelClassName?: string;
    placeholder?: string;
    type?: ButtonType;
}
declare const SelectInputRef: React.ForwardRefExoticComponent<SelectInputProps & React.RefAttributes<unknown>>;
export { SelectInputRef as SelectInput };
