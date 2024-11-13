import React from 'react';
import { AlertDialogProps } from './AlertDialog';
import { ButtonSize, ButtonVariant } from '../Button';
interface SimpleAlertDialogProps extends AlertDialogProps {
    /** Controls the size of the footer action buttons. */
    buttonSize?: ButtonSize;
    /** Text for the cancel button. Setting this prop will show the cancel button. */
    cancel?: string;
    /** Controls the variant of the cancel button. */
    cancelVariant?: ButtonVariant;
    /** Controls whether or not the close button in the dialog header is shown. */
    closeInHeader?: boolean;
    /** Text for the confirm button. Setting this prop will show the confirm button. */
    confirm?: string;
    /** Controls the variant of the confirm button. */
    confirmVariant?: ButtonVariant;
    /** Controls the dialog header text. */
    header?: string;
    /** Adds class names to the dialog header element. */
    headerClassName?: string;
    /** Callback function when the cancel button or the close button in the header is clicked. */
    onCancel?: () => void;
    /** Callback function when the confirm button is clicked. */
    onConfirm?: () => void;
}
export declare const SimpleAlertDialog: ({ backdropClassName, buttonSize, cancel, cancelVariant, children, confirm, confirmVariant, closeInHeader, closeDialog, dialogClassName, header, headerClassName, id, onCancel, onConfirm, open, portalProps, position, returnFocusEl, size, wrapperClassName, }: SimpleAlertDialogProps) => React.JSX.Element;
export {};
