import React from 'react';
interface CheckBoxProps {
    checked?: boolean;
    name?: string;
    label?: string;
    labelClass?: string;
    size?: `small` | `large`;
    value?: React.InputHTMLAttributes<HTMLInputElement>[`value`];
    disabled?: boolean;
    onChange: (e: any) => void;
}
declare const CheckBoxRef: React.ForwardRefExoticComponent<CheckBoxProps & React.RefAttributes<unknown>>;
export { CheckBoxRef as CheckBox };
