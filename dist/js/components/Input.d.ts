import React from 'react';
interface InputProps {
    autofocus?: boolean;
    disabled?: boolean;
    inputClassName?: string;
    label?: string;
    labelClassName?: string;
    leftIconClassName?: string;
    name?: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    onRightButtonClick?: (e: any) => void;
    placeholder?: string;
    rightButtonClassName?: string;
    role?: string;
    showLeftIcon?: boolean;
    showRightButton?: boolean;
    variant?: `default` | `dark-blue`;
    inputType?: `text` | `password` | `email` | `tel` | `search`;
    value: string;
}
declare const Input: ({ autofocus, disabled, inputClassName, label, labelClassName, leftIconClassName, name, onBlur, onChange, onFocus, onRightButtonClick, placeholder, rightButtonClassName, role, showLeftIcon, showRightButton, variant, inputType, value }: InputProps) => React.JSX.Element;
export { Input };
