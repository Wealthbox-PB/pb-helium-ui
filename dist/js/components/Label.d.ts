import React from 'react';
interface LabelProps {
    children: string | JSX.Element | JSX.Element[];
    htmlFor?: string;
    labelClassName?: string;
}
declare const Label: ({ children, htmlFor, labelClassName }: LabelProps) => React.JSX.Element;
export { Label };
