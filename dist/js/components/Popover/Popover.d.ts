import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { PortalProps } from '../Portal';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    onClick?: (e: any) => void;
    onKeyPress?: (e: any) => void;
}
interface PopoverProps {
    children: JSX.Element | JSX.Element[];
    renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
    arrow?: boolean;
    bodyClassName?: string;
    className?: string;
    dismissible?: boolean;
    offset?: number;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    openOnLoad?: boolean;
    placement?: Placement;
    portalProps?: PortalProps;
    showCloseButton?: boolean;
    size?: `sm` | `md` | `lg` | `xl`;
    theme?: `light` | `dark` | `primary`;
    trigger?: `click` | `hover`;
}
declare const Popover: ({ renderOpener, placement, children, trigger, arrow, open: openProp, dismissible, openOnLoad, size, theme, className, bodyClassName, showCloseButton, offset: offsetProp, onOpen, onClose, portalProps, }: PopoverProps) => React.JSX.Element;
export { Popover };
