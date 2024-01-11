import React from 'react';
interface SwitchProps {
    ariaLabel?: string;
    checked?: boolean;
    /**
     * @deprecated `defaultValue` prop is deprecated. Please use the `checked` prop instead.
     */
    defaultValue?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (value: boolean) => void;
    variant?: `primary` | `positive`;
}
export declare const Switch: ({ ariaLabel, checked, defaultValue, disabled, name, onChange, variant, }: SwitchProps) => React.JSX.Element;
export {};
