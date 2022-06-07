/// <reference types="react" />
import { Placement } from '@floating-ui/react';
interface TooltipProps {
    title: string;
    hideArrow?: boolean;
    placement?: Placement;
    children: JSX.Element;
    boundary?: string;
    width?: null | `lg` | `full`;
}
export declare const Tooltip: ({ children, title, placement, width, hideArrow, boundary, }: TooltipProps) => JSX.Element;
export {};
