import React from 'react';
import { ButtonVariant, ButtonSize } from './Button';
interface LinkButtonProps {
    active?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    className?: string;
    focus?: boolean;
    href: string;
    isExternal?: boolean;
    onClick?(): void;
    size?: ButtonSize;
    square?: boolean;
    variant?: ButtonVariant;
}
declare const LinkButton: ({ active, children, className, focus, href, isExternal, onClick, size, square, variant, }: LinkButtonProps) => React.JSX.Element;
export { LinkButton };
