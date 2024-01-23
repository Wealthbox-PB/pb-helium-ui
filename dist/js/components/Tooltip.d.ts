import React from 'react';
import type { Placement } from '@floating-ui/react';
import { PortalProps } from './Portal';
interface TooltipProps {
    children: JSX.Element;
    title: string;
    arrow?: boolean;
    boundary?: string;
    onClose?: () => void;
    onOpen?: () => void;
    open?: boolean;
    placement?: Placement;
    portalProps?: PortalProps;
    width?: `base` | `wide` | `full`;
}
export declare const Tooltip: ({ children, title, placement, width, arrow, boundary, open, onOpen, onClose, portalProps, }: TooltipProps) => React.JSX.Element;
export {};
