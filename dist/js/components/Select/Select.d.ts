import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    selectedLabel: string | null;
}
interface SelectProps {
    /** Content for the dropdown. */
    children: JSX.Element | JSX.Element[];
    /** The dropdown opener element. Use the destructured "ref", "selectedLabel", and "...props" to spread them
     * onto the opener element for correct functionality. */
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    /** Controls whether the dropdown should be closed when an item is selected. */
    closeOnSelect?: boolean;
    /** Array of currently displayed options in dropdown menu that gets passed into the
     * SearchableSelectInput. */
    displayOptions?: any[];
    /** Controls whether the dropdown should flip its orientation based on the available space in the browser
     * window. */
    flip?: boolean;
    /** Controls the height of the dropdown. */
    height?: string;
    /** Controls the initial selected label. */
    initialSelectedLabel?: string | null;
    /** Controls the initial selected value. */
    initialSelectedValue?: any | null;
    /** Callback function when the query is changed. Used for searchable select. */
    handleQuery?: (query: string) => void;
    /** Controls the maximum height of the dropdown. */
    maxHeight?: number;
    /** Controls the minimum height of the dropdown. */
    minHeight?: number;
    /** Name for the hidden input. The hidden input requires a name to render */
    name?: string;
    /** Controls the placement of the dropdown. */
    placement?: Placement;
    /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
     * element. */
    width?: `auto` | `full` | number;
    /** Controls weather the focus will remain on the render opener, but allow arrow keys to navigate list. */
    virtualFocus?: boolean;
}
declare const Select: ({ children, renderOpener, closeOnSelect, displayOptions, flip, handleQuery, height, initialSelectedLabel, initialSelectedValue, maxHeight, minHeight, name, placement, width, virtualFocus, }: SelectProps) => React.JSX.Element;
export { Select };
