import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBackdropProps {
  className?: string;
  closeDialog?: () => void;
}

export const DialogBackdrop = ({ className, closeDialog }: DialogBackdropProps) => {
  const context = useDialogContext();

  return (
    <button
      type="button"
      className={classNames(`h-dialog__backdrop`, className)}
      onClick={closeDialog || context.closeDialog}
      aria-label="Close Dialog"
    ></button>
  );
};
