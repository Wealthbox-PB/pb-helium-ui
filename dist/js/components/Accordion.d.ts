import React from 'react';
import { Icons } from 'types/icons';
export interface AccordionPanelItem {
    /** Content for the panel's expanded state. */
    children: string | JSX.Element | JSX.Element[];
    /** Content for the label that shows when expanded or collapsed. */
    label: string | JSX.Element | JSX.Element[];
}
interface AccordionSharedProps {
    /** The icon name which is interpolated in the css className for the collapse icon. */
    collapseIconName?: Icons;
    /** The icon name which is interpolated in the css className for the expand icon. */
    expandIconName?: Icons;
    /** Sets the position of the icon. */
    iconPosition?: `left` | `right`;
    /** Adds a css className to the panel element. */
    panelClassName?: string;
}
interface AccordionProps extends AccordionSharedProps {
    /** Controls whether or not multiple panels can be open at the same time. */
    allowMultipleOpen?: boolean;
    /** A css className for the accordion element. */
    className?: string;
    /** The items to be rendered as panels in the accordion. */
    items: AccordionPanelItem[];
    /** Controls whether or not the first panel should be open by default. */
    openFirstPanel?: boolean;
    /** Adds a css className with helium-ui "card" styling to the accordion element. */
    renderInCard?: boolean;
}
export declare const Accordion: ({ allowMultipleOpen, className, collapseIconName, expandIconName, iconPosition, items, openFirstPanel, panelClassName, renderInCard, }: AccordionProps) => React.JSX.Element;
export {};
