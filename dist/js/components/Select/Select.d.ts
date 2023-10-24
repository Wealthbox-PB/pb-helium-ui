import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    selectedLabel: string | null;
}
interface SelectProps {
    children: JSX.Element | JSX.Element[];
    closeOnSelect?: boolean;
    flip?: boolean;
    minHeight?: number;
    maxHeight?: number;
    height?: string;
    initialSelectedValue?: string | null;
    initialSelectedIndex?: number | null;
    placement?: Placement;
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    width?: `auto` | `full` | number;
}
declare const Select: ({ children, closeOnSelect, flip: flipProp, initialSelectedValue, initialSelectedIndex, minHeight, placement, renderOpener, width, maxHeight, height, }: SelectProps) => React.JSX.Element;
export { Select };
