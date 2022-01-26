import React from 'react';
import { useDialog } from './useDialog';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import { DialogContext } from './DialogContext';

interface SimpleModalDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  header?: string | JSX.Element[] | JSX.Element;
  headerClassName?: string;
  closeInHeader?: boolean;
  bodyClassName?: string;
  children: string | JSX.Element[] | JSX.Element;
  footer?: string | JSX.Element[] | JSX.Element;
  footerClassName?: string;
  footerBackground?: boolean;
  trapPaused?: boolean;
  dialogClassName?: string;
  dialogRole?: `dialog` | `alertdialog`;
  backdrop?: boolean;
  backdropClassName?: string;
}

const SimpleModalDialog = ({
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog,
  header,
  headerClassName,
  closeInHeader = true,
  bodyClassName,
  children,
  footer,
  footerBackground = true,
  footerClassName,
  trapPaused = false,
  dialogClassName,
  backdrop = true,
  backdropClassName,
}: SimpleModalDialogProps) => {
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
              <div {...getDialogProps()}>
                {header ? (
                  <DialogHeader
                    headerClassName={headerClassName}
                    closeDialog={closeDialog}
                    closeInHeader={closeInHeader}
                  >
                    {header}
                  </DialogHeader>
                ) : null}
                <DialogBody bodyClassName={bodyClassName}>{children}</DialogBody>
                {footer ? (
                  <DialogFooter footerClassName={footerClassName} footerBackground={footerBackground}>
                    {footer}
                  </DialogFooter>
                ) : null}
              </div>
            </div>
          </DialogPortal>
        </DialogContext.Provider>
      ) : null}
    </>
  );
};

export { SimpleModalDialog };
