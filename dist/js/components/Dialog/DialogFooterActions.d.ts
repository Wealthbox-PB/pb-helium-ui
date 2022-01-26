/// <reference types="react" />
import { ButtonSize, ButtonVariant } from '../Button';
interface DialogFooterActionsProps {
    cancel?: string;
    confirm?: string;
    cancelVariant?: ButtonVariant;
    confirmVariant?: ButtonVariant;
    buttonSize?: ButtonSize;
    onConfirm?: () => void;
    onCancel?: () => void;
    cancelRef?: any;
}
declare const DialogFooterActions: ({ confirm, cancel, confirmVariant, cancelVariant, buttonSize, cancelRef, onCancel, onConfirm, }: DialogFooterActionsProps) => JSX.Element;
export { DialogFooterActions };
