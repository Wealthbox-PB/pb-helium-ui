import React from 'react';
import { ButtonSize, ButtonVariant } from '../Button';
interface DialogFooterActionsProps {
    buttonSize?: ButtonSize;
    cancel?: string;
    cancelRef?: any;
    cancelVariant?: ButtonVariant;
    confirm?: string;
    confirmVariant?: ButtonVariant;
    onCancel?: () => void;
    onConfirm?: () => void;
}
declare const DialogFooterActions: ({ buttonSize, cancel, cancelRef, cancelVariant, confirm, confirmVariant, onCancel, onConfirm, }: DialogFooterActionsProps) => React.JSX.Element;
export { DialogFooterActions };
