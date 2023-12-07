import React from 'react';
interface DialogFooterProps {
    /** Content for the dialog footer. */
    children?: string | JSX.Element[] | JSX.Element;
    /** Controls whether or not the dialog footer should have a light-gray background. */
    footerBackground?: boolean;
    /** Adds class names to the dialog footer element. */
    footerClassName?: string;
}
declare const DialogFooter: ({ children, footerBackground, footerClassName }: DialogFooterProps) => React.JSX.Element;
export { DialogFooter };
