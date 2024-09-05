import React, { InputHTMLAttributes } from 'react';
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Adds class names to the input. */
    className?: string;
    /** Sets a label for the input. */
    label?: string;
    /** Adds class names to the label. */
    labelClassName?: string;
    /** Adds class names to the left icon. */
    leftIconClassName?: string;
    /** Callback function when the right button is clicked. */
    onRightButtonClick?: (e: any) => void;
    /** Adds class names to the right button. */
    rightButtonClassName?: string;
    /** Controls if the left icon is displayed. */
    showLeftIcon?: boolean;
    /** Controls if the right button is displayed. */
    showRightButton?: boolean;
    /** Controls the color variant. */
    variant?: `default` | `dark-blue` | `filled`;
    /** Controls the input type. */
    inputType?: `text` | `password` | `email` | `tel` | `search`;
}
declare const TextInputRef: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<unknown>>;
export { TextInputRef as TextInput };
