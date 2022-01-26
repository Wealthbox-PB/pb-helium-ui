import React from 'react';
export declare type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline`;
interface ButtonProps {
    children?: string | JSX.Element[] | JSX.Element;
    onClick?(): void;
    type?: `button` | `submit` | `reset`;
    className?: string;
    variant?: ButtonVariant;
}
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
