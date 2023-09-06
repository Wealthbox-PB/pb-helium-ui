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
    onRightIconClick?: (e: any) => void;
    onFocus?: (e: any) => void;
    placeholder?: string;
    rightIconClass?: string;
    showRightIcon?: boolean;
    theme?: `light` | `dark`;
    type?: `text` | `password` | `email` | `tel` | `search`;
    value: string;
}
declare const Input: ({ autofocus, disabled, leftIconClass, inputClasses, label, labelClasses, name, placeholder, theme, type, value, onBlur, onChange, onFocus, onRightIconClick, showRightIcon, rightIconClass }: InputProps) => React.JSX.Element;
export { Input };
