import React from 'react';
import { BasicDialog } from './BasicDialog';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';

interface DialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  submitHandler?: () => void;
  header?: string | JSX.Element[] | JSX.Element;
  headerClassName?: string;
  closeInHeader?: boolean;
  bodyClassName?: string;
  children: string | JSX.Element[] | JSX.Element;
  hasFooter?: boolean;
  footer?: string | JSX.Element[] | JSX.Element;
  footerClassName?: string;
  footerBackground?: boolean;
  trapPaused?: boolean;
  dialogClassName?: string;
  dialogRole?: `dialog` | `alertdialog`;
  backdrop?: boolean;
  backdropClassName?: string;
}

const Dialog = ({
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog,
  submitHandler,
  header,
  headerClassName,
  closeInHeader = true,
  bodyClassName,
  children,
  hasFooter = true,
  footer,
  footerBackground = true,
  footerClassName,
  trapPaused = false,
  dialogClassName,
  dialogRole = `dialog`,
  backdrop = true,
  backdropClassName,
}: DialogProps) => {
  return (
    <BasicDialog
      {...{
        open,
        size,
        position,
        initialFocusEl,
        returnFocusEl,
        closeDialog,
        children,
        trapPaused,
        dialogClassName,
        dialogRole,
        backdrop,
        backdropClassName,
      }}
    >
      <>
        {header ? (
          <DialogHeader
            headerClassName={headerClassName}
            dialogRole={dialogRole}
            closeDialog={closeDialog}
            closeInHeader={closeInHeader}
          >
            {header}
          </DialogHeader>
        ) : null}
        <DialogBody bodyClassName={bodyClassName}>{children}</DialogBody>
        {hasFooter ? (
          <DialogFooter
            footerClassName={footerClassName}
            closeDialog={closeDialog}
            submitHandler={submitHandler}
            footerBackground={footerBackground}
          >
            {footer}
          </DialogFooter>
        ) : null}
      </>
    </BasicDialog>
  );
};

export { Dialog };
