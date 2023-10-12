import React, { HTMLAttributes } from 'react';
import { Icons } from '../../types/icons';
interface DropdownMenuLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, `className`> {
    className?: string;
    iconName?: Icons;
    label: string;
    linkClassName?: string;
    useSelect?: string;
    variant?: `default` | `negative`;
}
export declare const DropdownMenuLink: ({ label, iconName, variant, className, linkClassName, ...props }: DropdownMenuLinkProps) => React.JSX.Element;
export {};
