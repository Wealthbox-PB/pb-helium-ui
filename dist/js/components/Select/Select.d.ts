import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    selectedLabel: string | null;
}
interface SelectProps {
    /** Content for the dropdown. */
    children: JSX.Element | JSX.Element[];
    /** The dropdown opener element. Use the destructured "ref" and "...props" to spread them onto the
     * opener element. */
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    /** Controls whether the dropdown should be close when an item is selected. */
    closeOnSelect?: boolean;
    /** Controls whether the dropdown should flip it's orientation based on the available space in the browser
     * window. */
    flip?: boolean;
    /** Controls the height of the dropdown. */
    height?: string;
    /** Controls the initial selected value. */
    initialSelectedValue?: string | null;
    /** Controls the initial selected index. */
    initialSelectedIndex?: number | null;
    /** Controls the maximum height of the dropdown. */
    maxHeight?: number;
    /** Controls the minimum height of the dropdown. */
    minHeight?: number;
    /** Controls the placement of the dropdown. */
    placement?: Placement;
    /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
     * element. */
    width?: `auto` | `full` | number;
}
declare const Select: ({ children, closeOnSelect, flip: flipProp, initialSelectedValue, initialSelectedIndex, minHeight, placement, renderOpener, width, maxHeight, height, }: SelectProps) => React.JSX.Element;
export { Select };
