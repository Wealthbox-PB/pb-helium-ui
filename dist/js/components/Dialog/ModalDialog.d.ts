import React from 'react';
import { AnimationDirection } from '../../index';
interface ModalDialogProps {
<<<<<<< HEAD
    /** Content for the dialog */
=======
    animateIn?: boolean;
    animateOut?: boolean;
    animationDirection?: AnimationDirection;
    backdrop?: boolean;
    backdropClassName?: string;
>>>>>>> d30f40d (add option to disable enter and exit animations)
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not */
    open: boolean;
    /** Controls whether the dialog have a backdrop overlaying the app. */
    backdrop?: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
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
declare const ModalDialog: ({ animateIn, animateOut, animationDirection, backdrop, backdropClassName, children, closeDialog, dialogClassName, initialFocusEl, open, position, returnFocusEl, size, trapPaused, }: ModalDialogProps) => React.JSX.Element;
export { ModalDialog };
