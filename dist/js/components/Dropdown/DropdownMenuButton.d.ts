import React, { ButtonHTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick` | `onKeyDown` | `onMouseDown` | `onSelect`> {
    buttonClassName?: string;
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    onEnter?: (e: KeyboardEvent) => void;
    onSelect?: (e: MouseEvent<HTMLElement> | KeyboardEvent | undefined) => void;
    useSelect?: string;
    variant?: `default` | `negative`;
    closeOnSelect?: boolean;
}
export declare const DropdownMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, onEnter, onSelect, closeOnSelect, variant, ...props }: DropdownMenuButtonProps) => React.JSX.Element;
export {};
