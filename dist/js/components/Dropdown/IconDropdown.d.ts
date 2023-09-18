import React from 'react';
import type { Placement } from '@floating-ui/react';
import { ButtonSize, ButtonVariant } from '../Button';
import type { Icons } from '../../types/icons';
interface IconDropdownProps {
    ariaLabel?: string;
    className?: string;
    buttonId?: string;
    iconClassName?: string;
    iconName?: Icons;
    placement?: Placement;
    children: JSX.Element[] | JSX.Element;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
declare const IconDropdown: ({ ariaLabel, className, buttonId, children, iconClassName, iconName, placement, size, variant, }: IconDropdownProps) => React.JSX.Element;
export { IconDropdown };
