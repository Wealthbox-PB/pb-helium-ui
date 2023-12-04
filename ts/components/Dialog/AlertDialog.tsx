import React, { useEffect } from 'react';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';

interface AlertDialogProps {
  /** Content for the dialog. */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the dialog is closed. */
  closeDialog: () => void;
  /** Controls whether the dialog is open or not. */
  open: boolean;
  /** Adds class names to the backdrop element. */
  backdropClassName?: string;
  /** Adds class names to the dialog wrapper element. */
  dialogClassName?: string;
  /** Element to focus when the dialog is opened. */
  leastDestructiveRef?: any;
  /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
  position?: string;
  /** Element to focus when the dialog is closed. */
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  /** Controls the size of the dialog. Default size is "medium". */
  size?: string;
}

export const AlertDialog = ({
  backdropClassName,
  children,
  closeDialog,
  dialogClassName,
  leastDestructiveRef,
  open,
  position,
  returnFocusEl,
  size,
}: AlertDialogProps) => {
  // alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
  // modal close function to actually close it, AND we also allow consumers to potentially remove the close
  // from the header if they want it to appear as an alert and still keep the role="dialog". This is
  // because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
  // dialog's information and controls require the user's immediate attention alertdialog should be used
  // instead of dialog.
  const {
    getDialogRootProps,
    getDialogContainerProps,
    getDialogProps,
    ariaLabelSelector,
    ariaDescriptionSelector,
  } = useDialog({
    backdrop: true,
    closeDialog,
    dialogClassName,
    dialogRole: `alertdialog`,
    initialFocusEl: undefined, // Ideally leastDestructiveRef would be handed in here
    open,
    position,
    returnFocusEl,
    size: size || `small`,
    trapPaused: false,
  });

  useEffect(() => {
    leastDestructiveRef?.current?.focus();
  }, [leastDestructiveRef]);

  return (
    <>
      {open ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <Portal className="h-dialog-portal">
            <div {...getDialogRootProps()}>
              <div {...getDialogContainerProps()}>
                <DialogBackdrop className={backdropClassName} closeDialog={() => {}} />
                <div {...getDialogProps()}>{children}</div>
              </div>
            </div>
          </Portal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};
