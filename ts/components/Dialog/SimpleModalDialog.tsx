import React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { ModalDialog } from './ModalDialog';

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
  return (
    <ModalDialog
      {...{
        open,
        size,
        position,
        initialFocusEl,
        returnFocusEl,
        trapPaused,
        dialogClassName,
        backdrop,
        backdropClassName,
        closeDialog,
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
