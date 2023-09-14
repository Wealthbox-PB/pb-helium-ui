import React, { InputHTMLAttributes } from 'react';
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    id?: string;
    label?: string;
    onChange?: () => void;
    onClick?: () => void;
    buttonSize?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButton: ({ disabled, id, label, onChange, onClick, buttonSize, variant, ...rest }: RadioButtonProps) => React.JSX.Element;
export { RadioButton };
