import React, { InputHTMLAttributes } from 'react';
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    buttonSize?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButtonRef: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<unknown>>;
export { RadioButtonRef as RadioButton };
