import React from 'react';
export type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline` | `link-primary` | `link-secondary`;
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;
interface ButtonProps {
    active?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    className?: string;
    disabled?: boolean;
    focus?: boolean;
    onClick?(): void;
    size?: ButtonSize;
    square?: boolean;
    type?: ButtonType;
    variant?: ButtonVariant;
}
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
