import React, { ComponentProps } from 'react';
import { Select } from './Select';
interface SearchableSelectProps extends Omit<ComponentProps<typeof Select>, `renderOpener` | `children` | `initialSelectedValue`> {
    /** Initial options for the dropdown menu. */
    initialOptions: {
        label: string;
        value: any;
    }[];
    /** Controls whether the user can specify a selectable custom value. */
    allowCustomValue?: boolean;
    /** Adds an aria-label to the button. */
    ariaLabel?: string;
    /** Adds class names to the button. */
    className?: string;
    /** Initial selected value for the dropdown menu. */
    initialSelectedValue?: string;
    /** Adds class names to the label */
    labelClassName?: string;
    /** Callback function when the dropdown menu item is clicked. */
    onClick?: (value?: any) => void;
    /** Callback function when the dropdown menu item is selected using the "Enter" key. */
    onKeyDown?: (value?: any) => void;
    /** Callback function when the dropdown menu item is clicked or selected using the "Enter" key. */
    onSelect?: (value?: any) => void;
    /** Sets placeholder text for the input. */
    placeholder?: string;
    /** Adds an id to the select button. */
    selectId?: string;
    /** Adds a label to the select button. */
    selectLabel?: string;
}
declare const SearchableSelect: ({ initialOptions, allowCustomValue, ariaLabel, className, initialSelectedValue, labelClassName, onClick, onKeyDown, onSelect, placeholder, selectId, selectLabel, ...props }: SearchableSelectProps) => React.JSX.Element;
export { SearchableSelect };
