/// <reference types="react" />
import type { Placement } from '@floating-ui/react';
interface SelectProps {
    /** Controls whether the dropdown should flip its orientation based on the available space in the browser
     * window. */
    flip?: boolean;
    /** Controls the height of the dropdown. */
    height?: string;
    /** Callback function when the query is changed. Used for searchable select. */
    handleQuery?: (query: string) => void;
    /** Controls the maximum height of the dropdown. */
    maxHeight?: number;
    /** Controls the minimum height of the dropdown. */
    minHeight?: number;
    /** Controls the placement of the dropdown. */
    placement?: Placement;
    /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
     * element. */
    width?: `auto` | `full` | number;
    /** Controls weather the focus will remain on the render opener, but allow arrow keys to navigate list. */
    virtualFocus?: boolean;
}
export declare function useSelect({ flip: flipProp, height, maxHeight, minHeight, handleQuery, placement, width, virtualFocus, }: SelectProps): {
    getReferenceProps: (userProps?: import("react").HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    labelsRef: import("react").MutableRefObject<(string | null)[]>;
    elementsRef: import("react").MutableRefObject<HTMLButtonElement[]>;
    xPosition: number;
    yPosition: number;
    setReference: ((node: import("@floating-ui/react-dom").ReferenceType | null) => void) & ((node: import("@floating-ui/react").ReferenceType | null) => void);
    setFloating: ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);
    strategy: import("@floating-ui/utils").Strategy;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    activeIndex: number | null;
    setActiveIndex: import("react").Dispatch<import("react").SetStateAction<number | null>>;
    context: {
        update: () => void;
        x: number;
        y: number;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        floatingStyles: import("react").CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: import("react").MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    searchInputRef: import("react").RefObject<HTMLInputElement>;
};
export {};
