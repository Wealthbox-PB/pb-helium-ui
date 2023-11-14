import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    open: boolean;
}
interface DropdownProps {
    children: JSX.Element | JSX.Element[];
    flip?: boolean;
    minHeight?: number;
    maxHeight?: number;
    height?: string;
    placement?: Placement;
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    width?: `auto` | `full` | number;
    open?: boolean;
    openProp?: boolean;
    dismissible?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
declare const AutoComplete: ({ children, flip: flipProp, minHeight, placement, renderOpener, width, maxHeight, height, open: openProp, dismissible, onOpen, onClose, }: DropdownProps) => React.JSX.Element;
export { AutoComplete };
