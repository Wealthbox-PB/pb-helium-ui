import React from 'react';
export declare type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline`;
export declare type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export declare type ButtonType = `button` | `submit` | `reset`;
interface ButtonProps {
    children?: string | JSX.Element[] | JSX.Element;
    onClick?(): void;
    type?: ButtonType;
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
