import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface SelectMenuButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
    buttonClassName?: string;
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    onClick: (e?: MouseEvent<HTMLElement>) => void;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const SelectMenuButton: ({ buttonClassName, children, className, iconName, label, onClick, variant, ...props }: SelectMenuButtonProps) => React.JSX.Element;
export {};
