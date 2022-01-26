/// <reference types="react" />
import { ButtonVariant } from '../Button';
interface SimpleAlertDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    onCancel?: () => void;
    onConfirm?: () => void;
    children: string | JSX.Element[] | JSX.Element;
    dialogClassName?: string;
    backdropClassName?: string;
    header?: string;
    cancel?: string;
    cancelVariant?: ButtonVariant;
    confirm?: string;
    confirmVariant?: ButtonVariant;
}
export declare const SimpleAlertDialog: ({ header, cancel, cancelVariant, confirm, confirmVariant, open, size, position, initialFocusEl, returnFocusEl, onCancel, onConfirm, children, dialogClassName, backdropClassName, }: SimpleAlertDialogProps) => JSX.Element;
export {};
