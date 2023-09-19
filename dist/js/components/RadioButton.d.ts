import React, { InputHTMLAttributes } from 'react';
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    buttonSize?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export { RadioButton };
