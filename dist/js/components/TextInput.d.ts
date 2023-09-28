import React, { InputHTMLAttributes } from 'react';
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    labelClassName?: string;
    leftIconClassName?: string;
    onRightButtonClick?: (e: any) => void;
    rightButtonClassName?: string;
    showLeftIcon?: boolean;
    showRightButton?: boolean;
    variant?: `default` | `dark-blue`;
    inputType?: `text` | `password` | `email` | `tel` | `search`;
}
declare const TextInputRef: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<unknown>>;
export { TextInputRef as TextInput };
