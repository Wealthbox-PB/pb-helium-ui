import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, `className` | `onClick`> {
    /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
     * this content. */
    label: string;
    /** Content for the dropdown menu item button. Setting children will override the default behavior of the
     * label and icon being displayed. */
    children?: JSX.Element[] | JSX.Element;
    /** Adds class names to the dropdown menu item. */
    className?: string;
    /** Displays an icon to the left of the label. Setting children will override this content. */
    iconName?: Icons;
    /** Adds class names to the dropdown menu item link. */
    linkClassName?: string;
    /** Callback function when the dropdown menu item is clicked. */
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    /** Controls the variant of the dropdown menu item. */
    variant?: `default` | `negative`;
}
export declare const DropdownMenuLink: ({ children, label, iconName, variant, className, linkClassName, onClick, ...props }: DropdownMenuLinkProps) => React.JSX.Element;
export {};
