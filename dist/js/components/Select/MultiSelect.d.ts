import React from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { PortalProps } from '../Portal';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    selectedLabels: string[] | null;
}
interface MultiSelectProps {
    /** The initial options for the dropdown list. */
    initialOptions: {
        label: string;
        value: any;
    }[];
    /** The dropdown opener element. Use the destructured "ref", "selectedLabel", and "...props" to spread them
     * onto the opener element for correct functionality. */
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    /** Controls whether the user can specify a selectable custom value. */
    allowCustomValue?: boolean;
    /** Controls whether the dropdown should flip its orientation based on the available space in the browser
     * window. */
    flip?: boolean;
    /** Controls the height of the dropdown. */
    height?: string;
    /** Controls the initial selected value. */
    initialSelectedValue?: any[];
    /** Controls the maximum height of the dropdown. */
    maxHeight?: number;
    /** Controls the minimum height of the dropdown. */
    minHeight?: number;
    /** Name for the hidden input. The hidden input requires a name to render */
    name?: string;
    /** Controls the placement of the dropdown. */
    placement?: Placement;
    /** Props passed into the Portal element. */
    portalProps?: Omit<PortalProps, `children`>;
    /** Controls whether the dropdown is searchable. */
    searchable?: boolean;
    /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
     * element. */
    width?: `auto` | `full` | number;
}
declare const MultiSelect: ({ initialOptions, renderOpener, allowCustomValue, flip, height, initialSelectedValue, maxHeight, minHeight, name, placement, portalProps, searchable, width, }: MultiSelectProps) => React.JSX.Element;
export { MultiSelect };
