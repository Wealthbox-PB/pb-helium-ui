import React, { useRef, useState, useEffect } from 'react';
import { useDialog, DialogProps } from '../../hooks/useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

export interface ModalDialogProps extends DialogProps {
  /** Content for the dialog. */
  children: string | JSX.Element[] | JSX.Element;
  /** Controls whether the dialog animates in. */
  animateIn?: boolean;
  /** Controls whether the dialog animates out. */
  animateOut?: boolean;
  /** Adds class names to the backdrop element. */
  backdropClassName?: string;
}

const ModalDialog = ({
  animateIn = true,
  animateOut = true,
  animationDirection = `up`,
  animationDistance = `md`,
  backdrop = true,
  backdropClassName,
  children,
  closeDialog,
  dialogClassName,
  id,
  initialFocusEl,
  open,
  position,
  returnFocusEl,
  size,
  trapPaused = false,
  wrapperClassName,
}: ModalDialogProps) => {
  const timeout = 250;
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const {
    getDialogRootProps,
    getDialogContainerProps,
    getDialogProps,
    ariaLabelSelector,
    ariaDescriptionSelector,
  } = useDialog({
    backdrop,
    closeDialog,
    dialogClassName,
    animationDirection,
    animationDistance,
    dialogRole: `dialog`,
    id,
    initialFocusEl,
    open: open || visible,
    position,
    returnFocusEl,
    size,
    trapPaused,
    wrapperClassName,
  });

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
                  {backdrop ? (
                    <DialogBackdrop
                      className={classNames(
                        `h-transition-element h-transition-element--fade-in`,
                        backdropClassName,
                      )}
                    />
                  ) : null}
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

export { ModalDialog };
