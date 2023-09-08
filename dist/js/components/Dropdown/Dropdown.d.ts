import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
}
interface DropdownProps {
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    children: JSX.Element | JSX.Element[];
    placement?: Placement;
}
declare const Dropdown: ({ renderOpener, placement, children }: DropdownProps) => React.JSX.Element;
export { Dropdown };
