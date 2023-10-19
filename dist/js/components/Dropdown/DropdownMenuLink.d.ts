import React, { AnchorHTMLAttributes } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, `className`> {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    iconName?: Icons;
    label: string;
    linkClassName?: string;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuLink: ({ children, label, iconName, variant, className, linkClassName, ...props }: DropdownMenuLinkProps) => React.JSX.Element;
export {};
