import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { PortalProps } from '../Portal';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    onClick?: (e: any) => void;
    onKeyPress?: (e: any) => void;
}
interface PopoverProps {
    /** Content for the popover. */
    children: JSX.Element | JSX.Element[];
    /** The popover opener element. Use the destructured "ref" and "...props" to spread them onto the
     * opener element */
    renderOpener: (props: RenderOpenerProps) => JSX.Element | void;
    /** Controls whether the popover should have an arrow or not. */
    arrow?: boolean;
    /** Adds class names to the popover body element. */
    bodyClassName?: string;
    /** Adds class names to the popover element. */
    className?: string;
    /** Controls whether the popover should be dismissible by clicking off of it, or using the `esc`
     * key. */
    dismissible?: boolean;
    /** Add distance between the reference and floating element */
    offset?: number;
    /** Callback function when the popover is closed */
    onClose?: () => void;
    /** Callback function when the popover is opened */
    onOpen?: () => void;
    /** Controls whether the popover is open or not. */
    open?: boolean;
    openOnLoad?: boolean;
    /** Controls the placement of the popover. */
    placement?: Placement;
    /** Props passed into the Portal element. */
    portalProps?: PortalProps;
    /** Controls whether the popover should have a close button or not. */
    showCloseButton?: boolean;
    /** Controls the size of the popover. */
    size?: `sm` | `md` | `lg` | `xl`;
    /** Controls the color theme of the popover. */
    theme?: `light` | `dark` | `primary`;
    /** Controls the open trigger of the popover. */
    trigger?: `click` | `hover`;
}
declare const Popover: ({ renderOpener, placement, children, trigger, arrow, open: openProp, dismissible, openOnLoad, size, theme, className, bodyClassName, showCloseButton, offset: offsetProp, onOpen, onClose, portalProps, }: PopoverProps) => React.JSX.Element;
export { Popover };
