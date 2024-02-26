import React from 'react';
interface LabelProps {
    /** Content for the label. */
    children: string | JSX.Element | JSX.Element[];
    /** Sets the `htmlFor` of the label. */
    htmlFor?: string;
    /** Adds class names to the label. */
    labelClassName?: string;
}
declare const Label: ({ children, htmlFor, labelClassName }: LabelProps) => React.JSX.Element;
export { Label };
