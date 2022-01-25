import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBackdropProps {
  className?: string;
}

export const DialogBackdrop = ({ className }: DialogBackdropProps) => {
  const context = useDialogContext();

  return (
    <button
      type="button"
      className={classNames(`h-dialog__backdrop`, className)}
      onClick={context.closeDialog}
      aria-label="Close Dialog"
    ></button>
  );
};
