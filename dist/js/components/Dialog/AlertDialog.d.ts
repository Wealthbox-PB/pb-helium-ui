import React from 'react';
interface AlertDialogProps {
    /** Content for the dialog. */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
    /** Controls whether the dialog animates in. */
    animateIn?: boolean;
    /** Controls whether the dialog animates out. */
    animateOut?: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
    /** Element to focus when the dialog is opened. */
    leastDestructiveRef?: any;
    /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
    position?: string;
    /** Element to focus when the dialog is closed. */
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: string;
}
export declare const AlertDialog: ({ animateIn, animateOut, backdropClassName, children, closeDialog, dialogClassName, leastDestructiveRef, open, position, returnFocusEl, size, }: AlertDialogProps) => React.JSX.Element;
export {};
