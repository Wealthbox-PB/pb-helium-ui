import React from 'react';
interface RadioButtonProps {
    autofocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    name: string;
    onChange?: () => void;
    onClick?: () => void;
    size?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButton: ({ autofocus, checked, disabled, id, label, name, onChange, onClick, size, variant, }: RadioButtonProps) => React.JSX.Element;
export { RadioButton };
