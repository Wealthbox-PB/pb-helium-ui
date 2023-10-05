import React from 'react';
interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: string;
    labelClass?: string;
    name?: string;
    onChange?: (e: {
        checked: boolean;
        indeterminate: boolean;
    }) => void;
    size?: `small` | `large`;
    value?: string;
}
declare const CheckboxRef: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export { CheckboxRef as Checkbox };
