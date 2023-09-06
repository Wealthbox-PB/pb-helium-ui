import React from 'react';
interface RadioButtonProps {
    autofocus?: boolean;
    checked: boolean;
    disabled?: boolean;
    name: string;
    label: string;
    onClick?: () => void;
    onChange?: () => void;
    size?: `small` | `large`;
    variant?: `default` | `pill`;
}
declare const RadioButton: ({ autofocus, name, disabled, checked, label, size, variant, onClick, onChange, }: RadioButtonProps) => React.JSX.Element;
export { RadioButton };
