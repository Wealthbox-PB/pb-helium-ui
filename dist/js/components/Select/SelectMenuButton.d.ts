import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface SelectMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
    /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
     * this content. */
    label: string;
    /** Callback function when the dropdown menu item is clicked. */
    onClick: (e?: MouseEvent<HTMLElement>) => void;
    /** Adds class names to the dropdown menu item button. */
    buttonClassName?: string;
    /** Content for the select menu item button. Setting children will override the default behavior of the
     * label, select checkmark, and icon being displayed. */
    children?: JSX.Element[] | JSX.Element;
    /** Adds class names to the dropdown menu item. */
    className?: string;
    /** Displays an icon to the left of the label. Setting children will override this content. */
    iconName?: Icons;
    /** Controls the variant of the dropdown menu item. */
    variant?: `default` | `negative`;
}
export declare const SelectMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, variant, ...props }: SelectMenuButtonProps) => React.JSX.Element;
export {};
