import React from 'react';
import { DialogProps } from '../../hooks/useDialog';
export interface AlertDialogProps extends DialogProps {
    /** Content for the dialog. */
    children: string | JSX.Element[] | JSX.Element;
    /** Controls whether the dialog animates in. */
    animateIn?: boolean;
    /** Controls whether the dialog animates out. */
    animateOut?: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
    /** Element to focus when the dialog is opened. */
    leastDestructiveRef?: any;
}
export declare const AlertDialog: ({ animateIn, animateOut, backdropClassName, children, closeDialog, dialogClassName, id, leastDestructiveRef, open, position, returnFocusEl, size, wrapperClassName, }: AlertDialogProps) => React.JSX.Element;
