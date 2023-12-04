import React from 'react';
import { AnimationDirection } from './useDialog';
import { ButtonSize, ButtonVariant } from '../Button';
interface SimpleAlertDialogProps {
<<<<<<< HEAD
    /** Content for the dialog. */
=======
    animationDirection?: AnimationDirection;
    backdropClassName?: string;
    buttonSize?: ButtonSize;
    cancel?: string;
    cancelVariant?: ButtonVariant;
>>>>>>> bc7978c (add animationDirection prop to dialogs)
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
    /** Adds class names to the backdrop element. */
    backdropClassName?: string;
    /** Controls the size of the footer action buttons. */
    buttonSize?: ButtonSize;
    /** Text for the cancel button */
    cancel?: string;
    /** Controls the variant of the cancel button. */
    cancelVariant?: ButtonVariant;
    /** Controls whether or not the close button in the dialog header is shown. */
    closeInHeader?: boolean;
    /** Text for the confirm button */
    confirm?: string;
    /** Controls the variant of the confirm button. */
    confirmVariant?: ButtonVariant;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
    /** Controls the dialog header text. */
    header?: string;
    /** Adds class names to the dialog header element. */
    headerClassName?: string;
    /** Callback function when the cancel button or the close button in the header is clicked. */
    onCancel?: () => void;
    /** Callback function when the confirm button is clicked. */
    onConfirm?: () => void;
    /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
    position?: string;
    /** Element to focus when the dialog is closed. */
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: string;
}
export declare const SimpleAlertDialog: ({ animationDirection, backdropClassName, buttonSize, cancel, cancelVariant, children, confirm, confirmVariant, closeInHeader, closeDialog, dialogClassName, header, headerClassName, onCancel, onConfirm, open, position, returnFocusEl, size, }: SimpleAlertDialogProps) => React.JSX.Element;
export {};
