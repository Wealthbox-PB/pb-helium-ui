import React, { useRef, useState, useEffect } from 'react';
import { useDialog } from '../hooks/useDialog';
import { Portal } from './Portal';
import { DialogContext } from './Dialog/DialogContext';
import { CSSTransition } from 'react-transition-group';

interface ToastProps {
  /** Content for the toast. */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the toast is closed. */
  closeToast: () => void;
  /** Controls whether the toast is open or not. */
  open: boolean;
  /** Adds class names to the toast element. */
  className?: string;
  /** Controls whether the toast animates in. */
  animateIn?: boolean;
  /** Controls whether the toast animates out. */
  animateOut?: boolean;
  /** Controls the size of the dialog. Default size is "medium". */
  size?: string;
}

const Toast = ({
  animateIn = true,
  animateOut = true,
  children,
  closeToast,
  className,
  open,
  size
}: ToastProps) => {
  const {
    getDialogRootProps,
    getDialogContainerProps,
    getDialogProps,
    ariaLabelSelector,
    ariaDescriptionSelector,
  } = useDialog({
    backdrop: false,
    closeDialog: closeToast,
    dialogClassName: className,
    animationDirection: `left`,
    animationDistance: `md`,
    dialogRole: `dialog`,
    initialFocusEl: undefined,
    open,
    position: `bottom right`,
    returnFocusEl: undefined,
    size,
    trapPaused: false,
  });

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
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog: closeToast }}>
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

export { Toast };
