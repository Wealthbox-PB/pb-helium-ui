import React, { ButtonHTMLAttributes } from 'react';
export declare type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline` | `link-primary` | `link-secondary` | `border-hover`;
export declare type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export declare type ButtonType = `button` | `submit` | `reset`;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    className?: string;
    focus?: boolean;
    size?: ButtonSize;
    square?: boolean;
    type?: ButtonType;
    variant?: ButtonVariant;
}
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
