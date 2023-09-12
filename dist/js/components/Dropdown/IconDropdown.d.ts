import React from 'react';
import type { Placement } from '@floating-ui/react';
import { ButtonSize, ButtonVariant } from 'components/Button';
interface IconDropdownProps {
    componentClass?: string;
    buttonAriaLabel?: string;
    buttonClass?: string;
    buttonId?: string;
    iconClass?: string;
    placement?: Placement;
    children: JSX.Element[] | JSX.Element;
    variant?: ButtonVariant | null;
    size?: ButtonSize;
}
declare const IconDropdown: ({ buttonAriaLabel, buttonClass, buttonId, children, componentClass, iconClass, placement, size, variant, }: IconDropdownProps) => React.JSX.Element;
export { IconDropdown };
