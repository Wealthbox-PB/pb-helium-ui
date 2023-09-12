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
    onRightButtonClick?: (e: any) => void;
    placeholder?: string;
    rightButtonClass?: string;
    role?: string;
    showRightButton?: boolean;
    theme?: `light` | `dark`;
    type?: `text` | `password` | `email` | `tel` | `search`;
    value: string;
}
declare const Input: ({ autofocus, disabled, inputClasses, label, labelClasses, leftIconClass, name, onBlur, onChange, onFocus, onRightButtonClick, placeholder, rightButtonClass, role, showRightButton, theme, type, value }: InputProps) => React.JSX.Element;
export { Input };
