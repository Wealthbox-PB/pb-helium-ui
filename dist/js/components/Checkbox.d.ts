import React, { InputHTMLAttributes } from 'react';
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className` | `size` | `type`> {
    /** Set the checkbox wrapping html label class name. */
    className?: string;
    /** Set the checkbox visual state to indeterminate. */
    indeterminate?: boolean;
    /** Set the checkbox input class name. */
    inputClassName?: string;
    /** Set the checkbox text label content. */
    label?: string;
    /** Set the checkbox text label class name. */
    labelClassName?: string;
    /** Controls the checkbox size. */
    size?: `sm` | `md` | `lg`;
}
declare const CheckboxRef: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<unknown>>;
export { CheckboxRef as Checkbox };
