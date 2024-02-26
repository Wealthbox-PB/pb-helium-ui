import React, { MutableRefObject } from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { PortalProps } from '../Portal';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    open: boolean;
    activeIndex: number | null;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    onClick?: (e: any) => void;
}
interface DropdownProps {
    /** Content for the dropdown. */
    children: JSX.Element | JSX.Element[];
    /** The dropdown opener element. Use the destructured "ref" and "...props" to spread them onto the
     * opener element. */
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    /** Adds class names to the dropdown element. */
    className?: string;
    /** Controls whether the dropdown should be dismissible by clicking off of it, or using the `esc`
     * key. */
    dismissible?: boolean;
    /** Controls whether the dropdown should flip it's orientation based on the available space in the browser
     * window. */
    flip?: boolean;
    /** Controls the height of the dropdown. */
    height?: string;
    /** Controls the initial focus element. */
    initialFocusEl?: number | MutableRefObject<HTMLElement | null> | undefined;
    /** Controls the initial active index. */
    initialActiveIndex?: number | null;
    /** Controls the maximum height of the dropdown. */
    maxHeight?: number;
    /** Controls the minimum height of the dropdown. */
    minHeight?: number;
    /** Callback function when the dropdown is closed. */
    onClose?: () => void;
    /** Callback function when the dropdown is opened. */
    onOpen?: () => void;
    /** Controls whether the dropdown is open or not. */
    open?: boolean;
    /** Props passed into the Portal element. */
    portalProps?: Omit<PortalProps, `children`>;
    /** Controls the placement of the dropdown. */
    placement?: Placement;
    /** Controls whether the active index should be reset when the dropdown content changes. */
    resetActiveIndex?: boolean | undefined;
    /** Controls whether the focus should be returned to the opener when the dropdown is closed. */
    returnFocus?: boolean | undefined;
    /** Controls whether the dropdown should toggle open when the opener is clicked. */
    toggleOpenOnOpenerClick?: boolean;
    /** Controls whether the dropdown menu items should have typeahead functionality. */
    typeahead?: boolean;
    /** Controls whether the dropdown menu items should have virtual focus, or the default native focus which
     * would be moved from the opener to the dropdown items when open. */
    virtualFocus?: boolean;
    /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
     * element. */
    width?: `auto` | `full` | number;
}
declare const Dropdown: ({ children, className, flip: flipProp, minHeight, placement, renderOpener, width, maxHeight, height, open: openProp, dismissible, typeahead: typeaheadProp, onOpen, onClose, initialFocusEl, returnFocus, virtualFocus, toggleOpenOnOpenerClick, resetActiveIndex, initialActiveIndex, portalProps, }: DropdownProps) => React.JSX.Element;
export { Dropdown };
