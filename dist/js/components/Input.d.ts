import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
declare const Input: ({ autoFocus, id, className, inputType, label, labelClassName, leftIconClassName, onRightButtonClick, rightButtonClassName, role, showLeftIcon, showRightButton, variant, ...rest }: InputProps) => React.JSX.Element;
export { Input };
