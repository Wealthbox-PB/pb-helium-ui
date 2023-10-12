import React, { HTMLAttributes } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
    buttonClassName?: string;
    className?: string;
    label: string;
    iconName?: Icons;
    onClick: () => void;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuButton: ({ buttonClassName, className, label, iconName, onClick, variant, ...props }: DropdownMenuButtonProps) => React.JSX.Element;
export {};
