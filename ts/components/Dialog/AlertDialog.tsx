import React, { useEffect } from 'react';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';

interface AlertDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  children: string | JSX.Element[] | JSX.Element;
  dialogClassName?: string;
  backdropClassName?: string;
  leastDestructiveRef?: any;
}

export const AlertDialog = ({
  open,
  size,
  position,
  returnFocusEl,
  leastDestructiveRef,
  children,
  dialogClassName,
  backdropClassName,
}: AlertDialogProps) => {
  // "alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
  //   modal close function to actually close it, AND we also allow consumers to potentially remove the close
  //   from the header if they want it to appear as an alert and still keep the role="dialog". This is
  //   because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
  //   dialog's information and controls require the user's immediate attention alertdialog should be used
  //   instead of dialog.
  const closeDialog = () => {};
  const { getRootProps, getDialogProps, ariaLabelSelector, ariaDescriptionSelector } = useDialog({
    closeDialog,
    open,
    initialFocusEl: null, // Ideally leastDestructiveRef would be handed in here
    returnFocusEl,
    size: size || `small`,
    position,
    dialogClassName,
    trapPaused: false,
    dialogRole: `alertdialog`,
    backdrop: true,
  });

  useEffect(() => {
    leastDestructiveRef?.current?.focus();
  }, [leastDestructiveRef]);

  return (
    <>
      {open ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <DialogPortal>
            <div {...getRootProps()}>
              <DialogBackdrop className={backdropClassName} closeDialog={closeDialog} />
              <div {...getDialogProps()}>{children}</div>
            </div>
          </DialogPortal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};
