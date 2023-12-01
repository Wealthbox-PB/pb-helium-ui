import React, { useRef, useState, useEffect } from 'react';
import { useDialog } from './useDialog';
import { Portal } from '../Portal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';
import { CSSTransition } from 'react-transition-group';

interface ModalDialogProps {
  /** Content for the dialog */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the dialog is closed */
  closeDialog: () => void;
  /** Controls whether the dialog is open or not */
  open: boolean;
  /** Controls whether the dialog have a backdrop overlaying the app. */
  backdrop?: boolean;
  /** Adds class names to the backdrop element. */
  backdropClassName?: string;
  /** Adds class names to the dialog wrapper element. */
  dialogClassName?: string;
  /** Element to focus when the dialog is opened. */
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
  /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
  position?: string;
  /** Element to focus when the dialog is closed. */
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
  /** Controls the size of the dialog. Default size is "medium". */
  size?: string;
  /** Controls whether the focus should be trapped inside of the dialog. */
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
    dialogRole: `dialog`,
    initialFocusEl,
    open,
    position,
    returnFocusEl,
    size,
    trapPaused,
  });

  const timeout = 240;
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
              timeout={timeout}
              classNames="h-dialog"
              onExited={() => setVisible(false)}
              appear={true}
            >
              <div {...getDialogRootProps()} ref={nodeRef}>
                <div {...getDialogContainerProps()}>
                  {backdrop ? <DialogBackdrop className={backdropClassName} /> : null}
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
