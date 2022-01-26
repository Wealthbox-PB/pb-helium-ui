/// <reference types="react" />
import { ButtonSize, ButtonVariant } from '../Button';
interface SimpleAlertDialogProps {
    open: boolean;
    size?: string;
    position?: string;
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
    buttonSize?: ButtonSize;
}
export declare const SimpleAlertDialog: ({ header, cancel, cancelVariant, confirm, confirmVariant, open, size, position, returnFocusEl, onCancel, onConfirm, children, dialogClassName, backdropClassName, buttonSize, }: SimpleAlertDialogProps) => JSX.Element;
export {};
