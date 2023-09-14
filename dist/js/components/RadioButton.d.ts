import React, { InputHTMLAttributes } from 'react';
interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    buttonSize?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButton: ({ disabled, id, label, onChange, onClick, buttonSize, variant, ...rest }: RadioButtonProps) => React.JSX.Element;
export { RadioButton };
