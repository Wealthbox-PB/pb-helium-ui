import React from 'react';
interface DialogBodyProps {
    ariaDescriptionSelector?: string;
    bodyClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
}
declare const DialogBody: ({ bodyClassName, ariaDescriptionSelector, children }: DialogBodyProps) => React.JSX.Element;
export { DialogBody };
