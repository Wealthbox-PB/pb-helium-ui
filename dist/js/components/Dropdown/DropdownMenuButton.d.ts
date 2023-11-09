import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
    buttonClassName?: string;
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    onClick: (e?: MouseEvent<HTMLElement>) => void;
    useSelect?: string;
    variant?: `default` | `negative`;
    closeOnClick?: boolean;
}
export declare const DropdownMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, closeOnClick, variant, ...props }: DropdownMenuButtonProps) => React.JSX.Element;
export {};
