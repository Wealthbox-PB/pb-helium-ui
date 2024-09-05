import React, { InputHTMLAttributes } from 'react';
interface SearchableSelectInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className`> {
    /** Array of options for the dropdown menu. */
    options: any[];
    /** Adds class names to the dropdown menu item. */
    className?: string;
    /** Callback function when the query is changed. */
    handleQuery?: (query: string) => void;
    /** Adds class names to the dropdown menu item button. */
    inputClassName?: string;
    /** Sets the correct select behavior for multiselect menus. */
    multiSelect?: boolean;
    /** Sets placeholder text for the input. */
    placeholder?: string;
}
export declare const SearchableSelectInput: ({ options, className, handleQuery, inputClassName, multiSelect, placeholder, ...props }: SearchableSelectInputProps) => React.JSX.Element;
export {};
