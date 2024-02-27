import React, { ButtonHTMLAttributes } from 'react';
import { ButtonType } from './Button';
interface SelectInputProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `placeholder` | `value`> {
    /** Sets a label for the button. */
    label?: string;
    /** Adds class names to the label. */
    labelClassName?: string;
    /** Sets the button placeholder. */
    placeholder?: string | false | null;
    /** Controls the type of the button. */
    type?: ButtonType;
    /** Sets the value of the button. */
    value?: string | null;
}
declare const SelectInputRef: React.ForwardRefExoticComponent<SelectInputProps & React.RefAttributes<unknown>>;
export { SelectInputRef as SelectInput };
