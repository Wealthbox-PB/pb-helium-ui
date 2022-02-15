import React from 'react';
import { useDialog } from './useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import classNames from 'classnames';

interface ModalDialogProps {
  backdrop?: boolean;
  backdropClassName?: string;
  children: string | JSX.Element[] | JSX.Element;
  closeDialog: () => void;
  dialogClassName?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  open: boolean;
  position?: string;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  size?: string;
  trapPaused?: boolean;
}

const ModalDialog = ({
  backdrop = true,
  backdropClassName,
  children,
  closeDialog,
  dialogClassName,
  initialFocusEl,
  open,
  position,
  returnFocusEl,
  size,
  trapPaused = false,
}: ModalDialogProps) => {
  const { getRootProps, getDialogProps, ariaLabelSelector, ariaDescriptionSelector } = useDialog({
    backdrop,
    closeDialog,
    dialogClassName,
    dialogRole: `dialog`,
    initialFocusEl,
    open,
    position,
    returnFocusEl,
    size,
    trapPaused,
  });

  return (
    <>
      {open ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <Portal className="h-dialog-portal">
            <div {...getRootProps()}>
              {backdrop ? <DialogBackdrop className={backdropClassName} /> : null}
              <div {...getDialogProps()}>{children}</div>
            </div>
          </Portal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};

export { ModalDialog };
