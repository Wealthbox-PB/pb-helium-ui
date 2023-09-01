import React from 'react';
interface RadioButtonProps {
    name: string;
    checked: boolean;
    label: string;
    size?: `small` | `large`;
    style?: `default` | `pill`;
    onClick?: () => void;
    onChange?: () => void;
}
declare const RadioButton: ({ name, checked, label, size, style, onClick, onChange, }: RadioButtonProps) => React.JSX.Element;
export { RadioButton };
