import React from 'react';
interface LabelProps {
    htmlFor?: string;
    labelText: string;
    labelClassName?: string;
}
declare const Label: ({ htmlFor, labelText, labelClassName, }: LabelProps) => React.JSX.Element;
export { Label };
