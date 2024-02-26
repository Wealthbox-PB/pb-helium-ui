import React from 'react';
import { ButtonVariant, ButtonSize } from './Button';
interface LinkButtonProps {
    /** The URL the button should navigate to. */
    href: string;
    /** Adds the active style to the button. */
    active?: boolean;
    /** Content for the button. */
    children?: string | JSX.Element[] | JSX.Element;
    /** Adds class names to the button. */
    className?: string;
    /** Adds the focus style to the button. */
    focus?: boolean;
    /** Sets the external relationship of the link. */
    isExternal?: boolean;
    /** Callback for when the button is clicked. */
    onClick?(): void;
    /** Controls the size of the button. */
    size?: ButtonSize;
    /** Adds the square style to the button. */
    square?: boolean;
    /** Controls the variant styling of the button. */
    variant?: ButtonVariant;
}
declare const LinkButton: ({ active, children, className, focus, href, isExternal, onClick, size, square, variant, }: LinkButtonProps) => React.JSX.Element;
export { LinkButton };
