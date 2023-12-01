import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, `className` | `onClick`> {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    linkClassName?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuLink: ({ children, label, iconName, variant, className, linkClassName, onClick, ...props }: DropdownMenuLinkProps) => React.JSX.Element;
export {};
