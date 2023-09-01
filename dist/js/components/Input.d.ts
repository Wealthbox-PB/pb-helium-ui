import React from 'react';
interface InputProps {
    autofocus?: boolean;
    disabled?: boolean;
    iconClass?: string;
    inputClasses?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    type?: `text` | `password | email` | `tel` | `search`;
    value: string;
    onBlur?: (e: any) => void;
    onChange?: (e: any) => void;
    onClearSearch?: (e: any) => void;
    onFocus?: (e: any) => void;
}
declare const Input: ({ autofocus, disabled, iconClass, inputClasses, label, name, placeholder, type, value, onBlur, onChange, onClearSearch, onFocus, }: InputProps) => React.JSX.Element;
export { Input };
