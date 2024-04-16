import React from 'react';
import { ButtonStyleProps } from './Button';
interface LinkButtonProps extends ButtonStyleProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** True if the link should prevent repeated clicks */
    disableAfterClick?: boolean;
    /** Sets the external relationship of the link. */
    isExternal?: boolean;
}
declare const LinkButton: ({ active, children, className, disableAfterClick, disabled: disabledOnInitialRender, focus, href, isExternal, onClick: originalOnClick, size, square, variant, ...props }: LinkButtonProps) => React.JSX.Element;
export { LinkButton };
