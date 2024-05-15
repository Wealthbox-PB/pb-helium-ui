import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBackdropProps {
  className?: string;
  closeDialog?: () => void;
}

export const DialogBackdrop = ({ className, closeDialog }: DialogBackdropProps) => {
  const context = useDialogContext();
  const handleClose = closeDialog || context.closeDialog;

  return (
    <button
      type="button"
      className={classNames(`h-dialog__backdrop h-cursor-auto`, className)}
      onClick={handleClose}
      aria-label="Close Dialog"
      data-testid="h-dialog__backdrop"
    ></button>
  );
};
