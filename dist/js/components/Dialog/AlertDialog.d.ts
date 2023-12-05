import React from 'react';
import { AnimationDirection } from '../../types/types';
interface AlertDialogProps {
<<<<<<< HEAD
    /** Content for the dialog. */
=======
    animationDirection?: AnimationDirection;
    backdropClassName?: string;
>>>>>>> bc7978c (add animationDirection prop to dialogs)
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
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
export declare const AlertDialog: ({ animationDirection, backdropClassName, children, closeDialog, dialogClassName, leastDestructiveRef, open, position, returnFocusEl, size, }: AlertDialogProps) => React.JSX.Element;
export {};
