import React, { ComponentProps } from 'react';
import { Dropdown } from './Dropdown';
import { ButtonSize, ButtonVariant } from '../Button';
import type { Icons } from '../../types/icons';
interface IconDropdownProps extends Omit<ComponentProps<typeof Dropdown>, `renderOpener`> {
    /** Content for the dropdown. */
    children: JSX.Element[] | JSX.Element;
    /** Adds an aria-label to the button. */
    ariaLabel?: string;
    /** Adds an id to the button. */
    buttonId?: string;
    /** Adds class names to the button. */
    className?: string;
    /** Adds class names to the icon. */
    iconClassName?: string;
    /** Controls which icon displays. Defaults to `dots`.  */
    iconName?: Icons;
    /** Controls the size of the button. */
    size?: ButtonSize;
    /** Controls the variant of the button. */
    variant?: ButtonVariant;
}
declare const IconDropdown: ({ ariaLabel, className, buttonId, children, iconClassName, iconName, size, variant, ...props }: IconDropdownProps) => React.JSX.Element;
export { IconDropdown };
