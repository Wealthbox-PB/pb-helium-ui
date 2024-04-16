import React, { useRef, useState, useEffect } from 'react';
import { useDialog, DialogProps } from '../hooks/useDialog';
import { Portal } from './Portal';
import { DialogContext } from './Dialog/DialogContext';
import { CSSTransition } from 'react-transition-group';

interface ToastProps extends DialogProps {
  /** Content for the toast. */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the toast is closed. */
  closeToast: () => void;
  /** Adds class names to the toast element. */
  className?: string;
  /** Number of milliseconds to delay entry of the toast element. */
  delay?: number;
  /** Controls whether the toast animates in. */
  animateIn?: boolean;
  /** Controls whether the toast animates out. */
  animateOut?: boolean;
}

const Toast = ({
  animateIn = true,
  animateOut = true,
  children,
  closeToast,
  className,
  delay = 0,
  id,
  open,
  size,
  wrapperClassName,
}: ToastProps) => {
  const timeout = 250;
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [delayed, setDelayed] = useState(true);
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
    id,
    animationDirection: `left`,
    animationDistance: `md`,
    dialogRole: `dialog`,
    initialFocusEl: undefined,
    open: open || visible,
    position: `bottom right`,
    returnFocusEl: undefined,
    size,
    trapPaused: false,
    trapFocus: false,
    wrapperClassName,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (open) {
        setVisible(true);
      }
      setDelayed(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, open]);

  return (
    <>
      {!delayed && visible ? (
        <DialogContext.Provider
          value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog: closeToast }}
        >
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
