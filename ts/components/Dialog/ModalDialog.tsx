import React from 'react';
import { useDialog } from './useDialog';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';

interface ModalDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  children: string | JSX.Element[] | JSX.Element;
  trapPaused?: boolean;
  dialogClassName?: string;
  backdrop?: boolean;
  backdropClassName?: string;
}

const ModalDialog = ({
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog,
  children,
  trapPaused = false,
  dialogClassName,
  backdrop = true,
  backdropClassName,
}: ModalDialogProps) => {
  const { getRootProps, getDialogProps, ariaLabelSelector, ariaDescriptionSelector } = useDialog({
    closeDialog,
    open,
    initialFocusEl,
    returnFocusEl,
    trapPaused,
    size,
    position,
    dialogClassName,
    dialogRole: `dialog`,
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

export { ModalDialog };
