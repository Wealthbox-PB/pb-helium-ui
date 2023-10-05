import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
}
interface DropdownProps {
    children: JSX.Element | JSX.Element[];
    flip?: boolean;
    height?: number;
    placement?: Placement;
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    width?: `auto` | `full` | number;
    grow?: boolean;
}
declare const Dropdown: ({ children, flip: flipProp, height, placement, renderOpener, width, grow, }: DropdownProps) => React.JSX.Element;
export { Dropdown };
