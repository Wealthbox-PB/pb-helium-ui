import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    autofocus?: boolean;
    id?: string;
    inputClassName?: string;
    label?: string;
    labelClassName?: string;
    leftIconClassName?: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    onRightButtonClick?: (e: any) => void;
    rightButtonClassName?: string;
    showLeftIcon?: boolean;
    showRightButton?: boolean;
    variant?: `default` | `dark-blue`;
    inputType?: `text` | `password` | `email` | `tel` | `search`;
}
declare const Input: ({ autofocus, id, inputClassName, label, labelClassName, leftIconClassName, onBlur, onChange, onFocus, onRightButtonClick, rightButtonClassName, role, showLeftIcon, showRightButton, variant, inputType, ...rest }: InputProps) => React.JSX.Element;
export { Input };
