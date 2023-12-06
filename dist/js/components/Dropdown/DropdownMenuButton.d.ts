import React, { ButtonHTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick` | `onKeyDown` | `onMouseDown` | `onSelect`> {
    /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
     * this content. */
    label: string;
    /** Adds class names to the dropdown menu item button. */
    buttonClassName?: string;
    /** Content for the dropdown menu item button. Setting children will override the default behavior of the
     * label and icon being displayed. */
    children?: JSX.Element[] | JSX.Element;
    /** Adds class names to the dropdown menu item. */
    className?: string;
    /** Controls whether or not the dropdown menu should close when the item is selected. */
    closeOnSelect?: boolean;
    /** Displays an icon to the left of the label. Setting children will override this content. */
    iconName?: Icons;
    /** Callback function when the dropdown menu item is clicked. */
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    /** Callback function when the dropdown menu item is selected using the "Enter" key. */
    onEnter?: (e: KeyboardEvent) => void;
    /** Callback function when the dropdown menu item is selected via click or "Enter" key. */
    onSelect?: (e: MouseEvent<HTMLElement> | KeyboardEvent | undefined) => void;
    useSelect?: string;
    /** Controls the variant of the dropdown menu item. */
    variant?: `default` | `negative`;
}
export declare const DropdownMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, onEnter, onSelect, closeOnSelect, variant, ...props }: DropdownMenuButtonProps) => React.JSX.Element;
export {};
