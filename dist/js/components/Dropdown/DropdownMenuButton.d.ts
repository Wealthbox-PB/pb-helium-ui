import React, { HTMLAttributes } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
    buttonClassName?: string;
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    onClick: () => void;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, variant, ...props }: DropdownMenuButtonProps) => React.JSX.Element;
export {};
