import React from 'react';
interface InputProps {
    autofocus?: boolean;
    disabled?: boolean;
    inputClasses?: string;
    label?: string;
    labelClasses?: string;
    leftIconClass?: string;
    name?: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    onRightIconClick?: (e: any) => void;
    placeholder?: string;
    rightIconClass?: string;
    role?: string;
    showRightIcon?: boolean;
    theme?: `light` | `dark`;
    type?: `text` | `password` | `email` | `tel` | `search`;
    value: string;
}
declare const Input: ({ autofocus, disabled, inputClasses, label, labelClasses, leftIconClass, name, onBlur, onChange, onFocus, onRightIconClick, placeholder, rightIconClass, role, showRightIcon, theme, type, value }: InputProps) => React.JSX.Element;
export { Input };
