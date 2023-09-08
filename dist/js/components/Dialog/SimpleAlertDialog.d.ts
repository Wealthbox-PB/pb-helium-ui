import React from 'react';
import { ButtonSize, ButtonVariant } from '../Button';
interface SimpleAlertDialogProps {
    backdropClassName?: string;
    buttonSize?: ButtonSize;
    cancel?: string;
    cancelVariant?: ButtonVariant;
    children: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    closeInHeader?: boolean;
    confirm?: string;
    confirmVariant?: ButtonVariant;
    dialogClassName?: string;
    header?: string;
    headerClassName?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    open: boolean;
    position?: string;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    size?: string;
}
export declare const SimpleAlertDialog: ({ backdropClassName, buttonSize, cancel, cancelVariant, children, confirm, confirmVariant, closeInHeader, closeDialog, dialogClassName, header, headerClassName, onCancel, onConfirm, open, position, returnFocusEl, size, }: SimpleAlertDialogProps) => React.JSX.Element;
export {};
