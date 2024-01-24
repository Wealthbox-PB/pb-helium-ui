import React from 'react';
import type { Placement } from '@floating-ui/react';
import { PortalProps } from './Portal';
interface TooltipProps {
    /** Element that is wrapped in the tooltip. */
    children: JSX.Element;
    /** Content for the tooltip. */
    title: string;
    /** Controls whether the tooltip should have an arrow or not. */
    arrow?: boolean;
    /** Set the clipping element of the tooltip. */
    boundary?: string;
    /** Callback function when the tooltip is closed */
    onClose?: () => void;
    /** Callback function when the tooltip is opened */
    onOpen?: () => void;
    /** Controls whether the tooltip is open or not. */
    open?: boolean;
    /** Controls the placement of the tooltip. */
    placement?: Placement;
    /** Props passed into the Portal element. */
    portalProps?: Omit<PortalProps, `children`>;
    /** Controls the width of the tooltip. */
    width?: `base` | `wide` | `full`;
}
export declare const Tooltip: ({ children, title, placement, width, arrow, boundary, open, onOpen, onClose, portalProps, }: TooltipProps) => React.JSX.Element;
export {};
