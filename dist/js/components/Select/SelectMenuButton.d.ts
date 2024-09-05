import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface SelectMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick` | `value`> {
    /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
     * this content. */
    label: string;
    /** Value for the dropdown menu item. */
    value: any;
    /** Adds class names to the dropdown menu item button. */
    buttonClassName?: string;
    /** Content for the select menu item button. Setting children will override the default behavior of the
     * label, select checkmark, and icon being displayed. */
    children?: JSX.Element[] | JSX.Element;
    /** Adds class names to the dropdown menu item. */
    className?: string;
    /** Controls whether the item is specified by the select input. */
    customValue?: boolean;
    /** Controls whether the dropdown menu item is disabled or not. */
    disabled?: boolean;
    /** Displays an icon to the left of the label. Setting children will override this content. */
    iconName?: Icons;
    /** Displays a checkbox next to the label for multiselect menus. */
    multiSelect?: boolean;
    /** Callback function when the dropdown menu item is clicked. */
    onClick?: (e?: MouseEvent<HTMLElement>) => void;
    /** Controls which select handler is used, */
    searchableMenu?: boolean;
    /** Controls the variant of the dropdown menu item. */
    variant?: `default` | `negative`;
}
export declare const SelectMenuButton: ({ buttonClassName, children, className, disabled, iconName, label, multiSelect, onClick, searchableMenu, customValue, variant, value, ...props }: SelectMenuButtonProps) => React.JSX.Element;
export {};
