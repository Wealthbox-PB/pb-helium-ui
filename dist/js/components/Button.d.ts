import React, { ButtonHTMLAttributes } from 'react';
export type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `magic` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline` | `link-primary` | `link-secondary` | `border-hover` | null;
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Adds the active style to the button. */
    active?: boolean;
    /** Content for the button. */
    children?: string | JSX.Element[] | JSX.Element;
    /** Adds class names to the button. */
    className?: string;
    /** Adds the focus style to the button. */
    focus?: boolean;
    /** Controls the size of the button. */
    size?: ButtonSize;
    /** Adds the square style to the button. */
    square?: boolean;
    /** Controls the type of the button. */
    type?: ButtonType;
    /** Controls the variant styling of the button. */
    variant?: ButtonVariant;
}
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
