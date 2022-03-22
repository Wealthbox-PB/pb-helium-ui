import React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { ModalDialog } from './ModalDialog';

interface SimpleModalDialogProps {
  backdrop?: boolean;
  backdropClassName?: string;
  bodyClassName?: string;
  children: string | JSX.Element[] | JSX.Element;
  closeDialog: () => void;
  closeInHeader?: boolean;
  dialogClassName?: string;
  dialogRole?: `dialog` | `alertdialog`;
  footer?: string | JSX.Element[] | JSX.Element;
  footerBackground?: boolean;
  footerClassName?: string;
  header?: string | JSX.Element[] | JSX.Element;
  headerClassName?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
  open: boolean;
  position?: string;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
  size?: string;
  trapPaused?: boolean;
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
  initialFocusEl,
  open,
  position,
  returnFocusEl,
  size,
  trapPaused = false,
}: SimpleModalDialogProps) => {
  return (
    <ModalDialog
      {...{
        backdrop,
        backdropClassName,
        closeDialog,
        dialogClassName,
        initialFocusEl,
        open,
        position,
        returnFocusEl,
        size,
        trapPaused,
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
