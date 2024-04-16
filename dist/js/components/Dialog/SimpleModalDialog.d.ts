import React from 'react';
import { ModalDialogProps } from './ModalDialog';
interface SimpleModalDialogProps extends ModalDialogProps {
    /** Optional class name for the dialog body container. */
    bodyClassName?: string;
    /** Controls whether or not the close button in the dialog header is shown. */
    closeInHeader?: boolean;
    /** Controls the header content. */
    header?: string | JSX.Element[] | JSX.Element;
    /** Adds class names to the dialog header element. */
    headerClassName?: string;
    /** Controls the footer content. */
    footer?: string | JSX.Element[] | JSX.Element;
    /** Controls whether or not the dialog footer should have a light-gray background. */
    footerBackground?: boolean;
    /** Adds class names to the dialog footer element. */
    footerClassName?: string;
}
declare const SimpleModalDialog: ({ backdrop, backdropClassName, bodyClassName, children, closeDialog, closeInHeader, dialogClassName, footer, footerBackground, footerClassName, header, headerClassName, id, initialFocusEl, open, position, returnFocusEl, size, trapPaused, wrapperClassName, }: SimpleModalDialogProps) => React.JSX.Element;
export { SimpleModalDialog };
