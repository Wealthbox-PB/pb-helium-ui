import React from 'react';
interface SwitchProps {
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (value: boolean) => void;
    variant?: `primary` | `positive`;
}
export declare const Switch: ({ ariaLabel, checked, disabled, name, onChange, variant, }: SwitchProps) => React.JSX.Element;
export {};
