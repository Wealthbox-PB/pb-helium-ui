import React, { InputHTMLAttributes } from 'react';
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `size` | `type`> {
    checked: boolean;
    indeterminate?: boolean;
    label?: string;
    labelClass?: string;
    size?: `small` | `large`;
}
declare const CheckboxRef: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export { CheckboxRef as Checkbox };
