/// <reference types="react" />
interface SwitchProps {
    ariaLabel?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    name?: string;
    variant?: `primary` | `positive`;
}
export declare const Switch: ({ ariaLabel, defaultValue, disabled, name, variant, }: SwitchProps) => JSX.Element;
export {};
