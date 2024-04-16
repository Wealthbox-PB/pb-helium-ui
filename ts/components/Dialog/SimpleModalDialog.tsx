import React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { ModalDialog, ModalDialogProps } from './ModalDialog';

interface SimpleModalDialogProps extends ModalDialogProps {
  /** Optional class name for the dialog body container. */
  bodyClassName?: string;
  /** Controls whether or not the close button in the dialog header is shown. */
  closeInHeader?: boolean;
  /** Controls the header content. */
  header?: string | JSX.Element[] | JSX.Element;
  /** Adds class names to the dialog header element. */
  headerClassName?: string;
  /** Controls the footer content. */
  footer?: string | JSX.Element[] | JSX.Element;
  /** Controls whether or not the dialog footer should have a light-gray background. */
  footerBackground?: boolean;
  /** Adds class names to the dialog footer element. */
  footerClassName?: string;
}

const SimpleModalDialog = ({
  backdrop = true,
  backdropClassName,
  bodyClassName,
  children,
  closeDialog,
  closeInHeader = true,
  dialogClassName,
  footer,
  footerBackground = true,
  footerClassName,
  header,
  headerClassName,
  id,
  initialFocusEl,
  open,
  position,
  returnFocusEl,
  size,
  trapPaused = false,
  wrapperClassName,
}: SimpleModalDialogProps) => {
  return (
    <ModalDialog
      {...{
        animationDirection: `up`,
        backdrop,
        backdropClassName,
        closeDialog,
        dialogClassName,
        id,
        initialFocusEl,
        open,
        position,
        returnFocusEl,
        size,
        trapPaused,
        wrapperClassName,
      }}
    >
      <>
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
      </>
    </ModalDialog>
  );
};

export { SimpleModalDialog };
