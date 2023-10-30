import React, { ComponentProps } from 'react';
import { Dropdown } from './Dropdown';
import { ButtonSize, ButtonVariant } from '../Button';
import type { Icons } from '../../types/icons';
interface IconDropdownProps extends Omit<ComponentProps<typeof Dropdown>, `renderOpener`> {
    ariaLabel?: string;
    className?: string;
    buttonId?: string;
    iconClassName?: string;
    iconName?: Icons;
    children: JSX.Element[] | JSX.Element;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
declare const IconDropdown: ({ ariaLabel, className, buttonId, children, iconClassName, iconName, size, variant, ...props }: IconDropdownProps) => React.JSX.Element;
export { IconDropdown };
