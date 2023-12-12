import React from 'react';
interface SimpleModalDialogProps {
    /** Content for the dialog. */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
    /** Controls whether the dialog have a backdrop overlaying the app. */
    backdrop?: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
    /** Optional class name for the dialog body container. */
    bodyClassName?: string;
    /** Controls whether or not the close button in the dialog header is shown. */
    closeInHeader?: boolean;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
    /** Sets the dialogs aria-role attribute. */
    dialogRole?: `dialog` | `alertdialog`;
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
    /** Element to focus when the dialog is opened. */
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
    /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
    position?: string;
    /** Element to focus when the dialog is closed. */
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: string;
    /** Controls whether the focus should be trapped inside of the dialog. */
    trapPaused?: boolean;
}
declare const SimpleModalDialog: ({ backdrop, backdropClassName, bodyClassName, children, closeDialog, closeInHeader, dialogClassName, footer, footerBackground, footerClassName, header, headerClassName, initialFocusEl, open, position, returnFocusEl, size, trapPaused, }: SimpleModalDialogProps) => React.JSX.Element;
export { SimpleModalDialog };
