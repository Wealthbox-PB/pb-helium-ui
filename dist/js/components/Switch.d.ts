interface SwitchProps {
    ariaLabel?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    name?: string;
    variant?: `primary` | `positive`;
    onChange?: (e: any) => void;
}
export declare const Switch: ({ ariaLabel, defaultValue, disabled, name, variant, onChange, }: SwitchProps) => JSX.Element;
export {};
