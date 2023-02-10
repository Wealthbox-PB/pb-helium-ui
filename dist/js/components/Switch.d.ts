/// <reference types="react" />
interface SwitchProps {
    name?: string;
    ariaLabel?: string;
    defaultValue?: boolean;
    variant?: `primary` | `positive`;
}
export declare const Switch: ({ name, ariaLabel, defaultValue, variant }: SwitchProps) => JSX.Element;
export {};
