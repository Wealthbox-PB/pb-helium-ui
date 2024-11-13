import React, { useRef, useState, useEffect } from 'react';
import { Portal, PortalProps } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogProps, useDialog } from '../../hooks/useDialog';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

export interface AlertDialogProps extends DialogProps {
  /** Content for the dialog. */
  children: string | JSX.Element[] | JSX.Element;
  /** Controls whether the dialog animates in. */
  animateIn?: boolean;
  /** Controls whether the dialog animates out. */
  animateOut?: boolean;
  /** Adds class names to the backdrop element. */
  backdropClassName?: string;
  /** Element to focus when the dialog is opened. */
  leastDestructiveRef?: any;
  /** Props passed into the Portal element. */
  portalProps?: Omit<PortalProps, `children`>;
}

export const AlertDialog = ({
  animateIn = true,
  animateOut = true,
  backdropClassName,
  children,
  closeDialog,
  dialogClassName,
  id,
  leastDestructiveRef,
  open,
  portalProps,
  position,
  returnFocusEl,
  size,
  wrapperClassName,
}: AlertDialogProps) => {
  const timeout = 250;
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);
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
    id,
    initialFocusEl: undefined, // Ideally leastDestructiveRef would be handed in here
    open: open || visible,
    position,
    returnFocusEl,
    size: size || `small`,
    trapPaused: false,
    wrapperClassName,
  });

  useEffect(() => {
    leastDestructiveRef?.current?.focus();
  }, [leastDestructiveRef]);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  return (
    <>
      {open || visible ? (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
          <Portal
            className={classNames(`h-dialog-portal`, portalProps?.className)}
            selector={portalProps?.selector}
          >
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
              <div {...getDialogRootProps()} ref={nodeRef} data-testid="h-dialog-wrapper">
                <div {...getDialogContainerProps()}>
                  <DialogBackdrop className={backdropClassName} closeDialog={() => {}} />
                  <div {...getDialogProps()} data-testid="h-dialog__el">
                    {children}
                  </div>
                </div>
              </div>
            </CSSTransition>
          </Portal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};
