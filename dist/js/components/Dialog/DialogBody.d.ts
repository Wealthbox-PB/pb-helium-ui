import React from 'react';
interface DialogBodyProps {
    /** Content for the dialog body. */
    children: string | JSX.Element[] | JSX.Element;
    /** Used to set the the id attribute of the dialog body */
    ariaDescriptionSelector?: string;
    /** Adds class names to the dialog body container. */
    bodyClassName?: string;
}
declare const DialogBody: ({ bodyClassName, ariaDescriptionSelector, children }: DialogBodyProps) => React.JSX.Element;
export { DialogBody };
