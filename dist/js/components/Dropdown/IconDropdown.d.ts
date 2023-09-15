import React from 'react';
import type { Placement } from '@floating-ui/react';
import { ButtonSize, ButtonVariant } from '../Button';
import type { Icons } from '../../types/icons';
interface IconDropdownProps {
    componentClass?: string;
    ariaLabel?: string;
    buttonClass?: string;
    buttonId?: string;
    iconClass?: string;
    iconName?: Icons;
    placement?: Placement;
    children: JSX.Element[] | JSX.Element;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
declare const IconDropdown: ({ ariaLabel, buttonClass, buttonId, children, iconClass, iconName, placement, size, variant, }: IconDropdownProps) => React.JSX.Element;
export { IconDropdown };
