import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
}
interface PopoverProps {
    renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
    children: JSX.Element | JSX.Element[];
    placement?: Placement;
    trigger?: `click` | `hover`;
    arrow?: boolean;
    open?: boolean;
    size?: `sm` | `md` | `lg` | `xl`;
    theme?: `light` | `dark` | `primary`;
    className?: string;
    bodyClassName?: string;
    closeInPopover?: boolean;
    closeDialog?: () => void;
}
declare const Popover: ({ renderOpener, placement, children, trigger, arrow, open: openProp, size, theme, className, bodyClassName, closeInPopover, }: PopoverProps) => React.JSX.Element;
export { Popover };
