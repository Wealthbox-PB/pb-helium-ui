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
  footerClass?: string;
  footerBackground?: boolean;
  trapPaused?: boolean;
  dialogElClass?: string;
  dialogRole?: `dialog` | `alertdialog`;
  backdrop?: boolean;
  backdropClass?: string;
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
  footerClass,
  trapPaused = false,
  dialogElClass,
  dialogRole = `dialog`,
  backdrop = true,
  backdropClass,
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
        backdrop,
        backdropClass,
      }}
    >
      <>
        {header ? (
          <DialogHeader
            headerClass={headerClass}
            dialogRole={dialogRole}
            closeDialog={closeDialog}
            closeInHeader={closeInHeader}
          >
            {header}
          </DialogHeader>
        ) : null}
        <DialogBody bodyClass={bodyClass}>{children}</DialogBody>
        {hasFooter ? (
          <DialogFooter
            footerClass={footerClass}
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
