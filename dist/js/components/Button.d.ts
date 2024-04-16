import React, { ButtonHTMLAttributes } from 'react';
export type ButtonVariant = `primary` | `secondary` | `positive` | `negative` | `info` | `magic` | `primary-outline` | `secondary-outline` | `negative-outline` | `info-outline` | `link-primary` | `link-secondary` | `border-hover` | null;
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;
export interface ButtonStyleProps {
    /** Adds the active style to the button. */
    active?: boolean;
    /** Additional classes to apply to the button */
    className?: string;
    /** Adds disabled style to the button */
    disabled?: boolean;
    /** Adds the focus style to the button. */
    focus?: boolean;
    /** Controls the size of the button. */
    size?: ButtonSize;
    /** Adds the square style to the button. */
    square?: boolean;
    /** Controls the variant styling of the button. */
    variant?: ButtonVariant;
}
interface ButtonProps extends ButtonStyleProps, ButtonHTMLAttributes<HTMLButtonElement> {
    /** Controls the type of the button. */
    type?: ButtonType;
}
export declare function buttonClassNames({ active, className, disabled, focus, size, square, variant, }: ButtonStyleProps): string;
declare const ButtonRef: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ButtonRef as Button };
