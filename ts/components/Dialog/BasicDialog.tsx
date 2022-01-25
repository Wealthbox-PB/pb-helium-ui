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
  closeDialog?: () => void;
  children: string | JSX.Element[] | JSX.Element;
  trapPaused?: boolean;
  dialogElClass?: string;
  dialogRole?: `dialog` | `alertdialog`;
  backdrop?: boolean;
  backdropClass?: string;
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
  backdrop = true,
  backdropClass,
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
    backdrop,
  });

  return (
        <DialogContext.Provider value={{ ariaLabelSelector, ariaDescriptionSelector, closeDialog }}>
              {backdrop ? <DialogBackdrop className={backdropClass} /> : null}
      )}
    </DialogContext.Provider>
  );
};
