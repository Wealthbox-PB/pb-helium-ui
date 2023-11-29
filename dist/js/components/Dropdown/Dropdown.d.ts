import React, { MutableRefObject } from 'react';
import type { Placement, ReferenceType } from '@floating-ui/react';
interface RenderOpenerProps {
    ref: (node: ReferenceType | null) => void;
    open: boolean;
    activeIndex: number | null;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    onKeyDown?: (e: any) => void;
}
interface DropdownProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    flip?: boolean;
    minHeight?: number;
    maxHeight?: number;
    height?: string;
    virtualFocus?: boolean;
    placement?: Placement;
    renderOpener: (props: RenderOpenerProps) => JSX.Element;
    width?: `auto` | `full` | number;
    open?: boolean;
    dismissible?: boolean;
    toggleOpenOnOpenerClick?: boolean;
    typeahead?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    initialFocusEl?: number | MutableRefObject<HTMLElement | null> | undefined;
    returnFocus?: boolean | undefined;
}
declare const Dropdown: ({ children, className, flip: flipProp, minHeight, placement, renderOpener, width, maxHeight, height, open: openProp, dismissible, typeahead: typeaheadProp, onOpen, onClose, initialFocusEl, returnFocus, virtualFocus, toggleOpenOnOpenerClick, }: DropdownProps) => React.JSX.Element;
export { Dropdown };
