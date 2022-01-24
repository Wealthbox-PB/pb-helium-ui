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
  headerClass?: string;
  closeInHeader?: boolean;
  bodyClass?: string;
  children: string | JSX.Element[] | JSX.Element;
  hasFooter?: boolean;
  footer?: string | JSX.Element[] | JSX.Element;
  footerBackground?: boolean;
  trapPaused?: boolean;
  dialogElClass?: string;
  dialogRole?: `dialog` | `alertdialog`;
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
  headerClass,
  closeInHeader = true,
  bodyClass,
  children,
  hasFooter = true,
  footer,
  footerBackground = true,
  trapPaused = false,
  dialogElClass,
  dialogRole = `dialog`,
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
        dialogElClass,
        dialogRole,
      }}
    >
      <>
        {header && (
          <DialogHeader
            headerClass={headerClass}
            dialogRole={dialogRole}
            closeDialog={closeDialog}
            closeInHeader={closeInHeader}
          >
            {header}
          </DialogHeader>
        )}
        <DialogBody bodyClass={bodyClass}>{children}</DialogBody>
        {hasFooter && (
          <DialogFooter
            closeDialog={closeDialog}
            submitHandler={submitHandler}
            footerBackground={footerBackground}
          >
            {footer}
          </DialogFooter>
        )}
      </>
    </BasicDialog>
  );
};

export { Dialog };
