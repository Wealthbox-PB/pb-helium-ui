import React from 'react';
import { DialogProps } from '../../hooks/useDialog';
export interface ModalDialogProps extends DialogProps {
    /** Content for the dialog. */
    children: string | JSX.Element[] | JSX.Element;
    /** Controls whether the dialog animates in. */
    animateIn?: boolean;
    /** Controls whether the dialog animates out. */
    animateOut?: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
}
declare const ModalDialog: ({ animateIn, animateOut, animationDirection, animationDistance, backdrop, backdropClassName, children, closeDialog, dialogClassName, id, initialFocusEl, open, position, returnFocusEl, size, trapPaused, wrapperClassName, }: ModalDialogProps) => React.JSX.Element;
export { ModalDialog };
