import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    onClick?: (e: any) => void;
    onKeyPress?: (e: any) => void;
}
interface PopoverProps {
    renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
    children: JSX.Element | JSX.Element[];
    placement?: Placement;
    trigger?: `click` | `hover`;
    arrow?: boolean;
    open?: boolean;
    dismissible?: boolean;
    openOnLoad?: boolean;
    size?: `sm` | `md` | `lg` | `xl`;
    theme?: `light` | `dark` | `primary`;
    className?: string;
    bodyClassName?: string;
    showCloseButton?: boolean;
    offset?: number;
    onOpen?: () => void;
    onClose?: () => void;
}
declare const Popover: ({ renderOpener, placement, children, trigger, arrow, open: openProp, dismissible, openOnLoad, size, theme, className, bodyClassName, showCloseButton, offset: offsetProp, onOpen, onClose, }: PopoverProps) => React.JSX.Element;
export { Popover };
