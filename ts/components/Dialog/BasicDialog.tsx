import React from 'react';
import { DialogPortal } from './DialogPortal';
import { DialogBackdrop } from './DialogBackdrop';
import classNames from 'classnames';
import { useDialog } from './useDialog';
import { DialogContext } from './DialogContext';

const dialogSelectorPrefix = `h-react-dialog`;
const dialogEl = `${dialogSelectorPrefix}__el`;

interface BasicDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  closeDialog: () => void;
  children: string | JSX.Element[] | JSX.Element;
  trapPaused?: boolean;
  dialogElClass?: string;
  dialogRole?: `dialog` | `alertdialog`;
}

export const BasicDialog = ({
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  closeDialog = () => {},
  children,
  trapPaused = false,
  dialogElClass,
  dialogRole = `dialog`,
}: BasicDialogProps) => {
  const { getRootProps, dialogRef, ariaLabelSelector, ariaDescriptionSelector } = useDialog({
    closeDialog,
    open,
    initialFocusEl,
    returnFocusEl,
    trapPaused,
    size,
    position,
    dialogRole,
  });

  return (
    <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector }}>
      {open && (
        <DialogPortal>
          <div {...getRootProps()}>
            <DialogBackdrop handleClick={closeDialog} />
            <div ref={dialogRef} tabIndex={-1} className={classNames(dialogEl, dialogElClass)}>
              {children}
            </div>
          </div>
        </DialogPortal>
      )}
    </DialogContext.Provider>
  );
};
