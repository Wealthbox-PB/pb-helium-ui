import React from 'react';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';

interface BasicDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog?: () => void;
  children: string | JSX.Element[] | JSX.Element;
  trapPaused?: boolean;
  dialogClassName?: string;
  dialogRole?: `dialog` | `alertdialog`;
  backdrop?: boolean;
  backdropClassName?: string;
}

export const BasicDialog = ({
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog = () => {},
  children,
  trapPaused = false,
  dialogClassName,
  dialogRole = `dialog`,
  backdrop = true,
  backdropClassName,
}: BasicDialogProps) => {
  const { getRootProps, getDialogProps, ariaLabelSelector, ariaDescriptionSelector } = useDialog({
    closeDialog,
    open,
    initialFocusEl,
    returnFocusEl,
    trapPaused,
    size,
    position,
    dialogClassName,
    dialogRole,
    backdrop,
  });

  return (
    <>
      {open ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <DialogPortal>
            <div {...getRootProps()}>
              {backdrop ? <DialogBackdrop className={backdropClassName} /> : null}
              <div {...getDialogProps()}>{children}</div>
            </div>
          </DialogPortal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};
