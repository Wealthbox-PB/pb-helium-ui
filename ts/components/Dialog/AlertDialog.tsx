import React, { useRef, useState, useEffect } from 'react';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { useDialog } from '../../hooks/useDialog';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';

interface AlertDialogProps {
  /** Content for the dialog. */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the dialog is closed. */
  closeDialog: () => void;
  /** Controls whether the dialog is open or not. */
  open: boolean;
  /** Controls whether the dialog animates in. */
  animateIn?: boolean;
  /** Controls whether the dialog animates out. */
  animateOut?: boolean;
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
  animateIn = true,
  animateOut = true,
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
    animationDirection: `up`,
    animationDistance: `md`,
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

  const timeout = 250;
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  return (
    <>
      {open || visible ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <Portal className="h-dialog-portal">
            <CSSTransition
              nodeRef={nodeRef}
              in={open && visible}
              appear={animateIn || animateOut}
              timeout={timeout}
              enter={animateIn}
              exit={animateOut}
              classNames="h-transition-"
              onExited={() => setVisible(false)}
            >
              <div {...getDialogRootProps()} ref={nodeRef}>
                <div {...getDialogContainerProps()}>
                  <DialogBackdrop className={backdropClassName} closeDialog={() => {}} />
                  <div {...getDialogProps()}>{children}</div>
                </div>
              </div>
            </CSSTransition>
          </Portal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};
