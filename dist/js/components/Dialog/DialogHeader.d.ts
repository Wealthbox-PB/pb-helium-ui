import React from 'react';
interface DialogHeaderProps {
    /** Used to set the the id attribute of the dialog heading */
    ariaLabelSelector?: string;
    /** Content for the dialog header. */
    children?: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog?: () => void;
    /** Controls whether or not the close button in the dialog header is shown. */
    closeInHeader?: boolean;
    /** Adds class names to the dialog header element. */
    headerClassName?: string;
}
declare const DialogHeader: ({ ariaLabelSelector, children, closeDialog, closeInHeader, headerClassName, }: DialogHeaderProps) => React.JSX.Element;
export { DialogHeader };
