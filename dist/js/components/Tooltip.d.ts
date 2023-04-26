/// <reference types="react" />
import { Placement } from '@floating-ui/react';
interface TooltipProps {
    title: string;
    arrow?: boolean;
    placement?: Placement;
    children: JSX.Element;
    boundary?: string;
    width?: `base` | `wide` | `full`;
    open?: boolean;
}
export declare const Tooltip: ({ children, title, placement, width, arrow, boundary, open, }: TooltipProps) => JSX.Element;
export {};
