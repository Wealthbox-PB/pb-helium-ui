import React, { ComponentProps } from 'react';
import { Select } from './Select';
interface SimpleSelectProps extends Omit<ComponentProps<typeof Select>, `renderOpener` | `children`> {
    /** Adds an aria-label to the button. */
    ariaLabel?: string;
    /** Adds class names to the select button. */
    className?: string;
    /** Content for the dropdown. */
    children?: JSX.Element[] | JSX.Element;
    /** Adds an id to the select opener button. */
    id?: string;
    /** Adds class names to the label */
    labelClassName?: string;
    /** Callback function when the dropdown menu item is clicked. This is only passed to menu items rendered
     * via the options prop.*/
    onSelect?: () => void;
    /** Array of options for the dropdown menu. */
    options?: {
        label: string;
        value: string;
    }[];
    /** Sets placeholder text for the input. */
    placeholder?: string;
    /** Adds a label to the select button. */
    selectLabel?: string;
}
declare const SimpleSelect: ({ children, ariaLabel, className, id, labelClassName, onSelect, options, placeholder, selectLabel, ...props }: SimpleSelectProps) => React.JSX.Element;
export { SimpleSelect };
