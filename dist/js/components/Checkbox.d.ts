import React, { InputHTMLAttributes } from 'react';
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className` | `size` | `type`> {
    checked: boolean;
    className?: string;
    indeterminate?: boolean;
    inputClassName?: string;
    label?: string;
    labelClassName?: string;
    size?: `sm` | `md` | `lg`;
}
declare const CheckboxRef: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export { CheckboxRef as Checkbox };
