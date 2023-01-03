import React, { useRef } from 'react';
import { AlertDialog } from './AlertDialog';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { ButtonSize, ButtonVariant } from '../Button';
import { DialogFooterActions } from './DialogFooterActions';

interface SimpleAlertDialogProps {
  backdropClassName?: string;
  buttonSize?: ButtonSize;
  cancel?: string;
  cancelVariant?: ButtonVariant;
  children: string | JSX.Element[] | JSX.Element;
  closeDialog: () => void;
  closeInHeader?: boolean;
  confirm?: string;
  confirmVariant?: ButtonVariant;
  dialogClassName?: string;
  header?: string;
  headerClassName?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  open: boolean;
  position?: string;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  size?: string;
}

export const SimpleAlertDialog = ({
  backdropClassName,
  buttonSize,
  cancel = ``,
  cancelVariant = `secondary`,
  children,
  confirm = ``,
  confirmVariant = `positive`,
  closeInHeader = false,
  closeDialog,
  dialogClassName,
  header = ``,
  headerClassName,
  onCancel = () => {},
  onConfirm = () => {},
  open,
  position,
  returnFocusEl,
  size,
}: SimpleAlertDialogProps) => {
  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog
      {...{
        backdropClassName,
        closeDialog,
        dialogClassName,
        leastDestructiveRef,
        open,
        position,
        returnFocusEl,
        size,
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
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          <DialogFooterActions
            {...{
              buttonSize,
              cancel,
              cancelRef: leastDestructiveRef,
              cancelVariant,
              confirm,
              confirmVariant,
              onCancel,
              onConfirm,
            }}
          />
        </DialogFooter>
      </>
    </AlertDialog>
  );
};
