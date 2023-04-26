import React from 'react';
interface SwitchProps {
    ariaLabel?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    name?: string;
    variant?: `primary` | `positive`;
    onChange?: (e: any) => void;
}
declare const SwitchRef: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<unknown>>;
export { SwitchRef as Switch };
