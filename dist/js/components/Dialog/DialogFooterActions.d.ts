import React from 'react';
import { ButtonSize, ButtonType, ButtonVariant } from '../Button';
interface DialogFooterActionsProps {
    buttonSize?: ButtonSize;
    cancel?: string;
    cancelRef?: React.RefObject<HTMLButtonElement>;
    cancelVariant?: ButtonVariant;
    confirm?: string;
    confirmRef?: React.RefObject<HTMLButtonElement>;
    confirmVariant?: ButtonVariant;
    confirmClassName?: string;
    confirmType?: ButtonType;
    onCancel?: () => void;
    onConfirm?: () => void;
}
declare const DialogFooterActions: ({ buttonSize, cancel, cancelRef, cancelVariant, confirm, confirmRef, confirmVariant, confirmClassName, confirmType, onCancel, onConfirm, }: DialogFooterActionsProps) => React.JSX.Element;
export { DialogFooterActions };
