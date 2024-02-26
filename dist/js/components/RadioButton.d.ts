import React, { InputHTMLAttributes } from 'react';
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Set the label content */
    label?: string;
    /** Controls the radio button size */
    buttonSize?: `small` | `large`;
    /** Controls the radio button variant */
    variant?: `default` | `pill`;
}
declare const RadioButtonRef: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<unknown>>;
export { RadioButtonRef as RadioButton };
