import React from 'react';
interface SwitchProps {
    /** Aria label for the switch. Defaults to On/Off depending on the switch's checked value */
    ariaLabel?: string;
    /** Controls whether the switch is checked or not. */
    checked?: boolean;
    /**
     * Sets the default checked value for the switch.
     * Cannot be updated using an external state after the component is mounted.
     * @deprecated `defaultValue` prop is deprecated. Please use the `checked` prop instead.
     */
    defaultValue?: boolean;
    /** Controls whether the switch is disabled or not. */
    disabled?: boolean;
    /** Name for the hidden input. */
    name?: string;
    /** Callback function when the switch is changed. */
    onChange?: (value: boolean) => void;
    /** Controls the color of the switch. */
    variant?: `primary` | `positive`;
}
export declare const Switch: ({ ariaLabel, checked, defaultValue, disabled, name, onChange, variant, }: SwitchProps) => React.JSX.Element;
export {};
