import React, { useRef } from 'react';
import { AlertDialog, AlertDialogProps } from './AlertDialog';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { ButtonSize, ButtonVariant } from '../Button';
import { DialogFooterActions } from './DialogFooterActions';

interface SimpleAlertDialogProps extends AlertDialogProps {
  /** Controls the size of the footer action buttons. */
  buttonSize?: ButtonSize;
  /** Text for the cancel button. Setting this prop will show the cancel button. */
  cancel?: string;
  /** Controls the variant of the cancel button. */
  cancelVariant?: ButtonVariant;
  /** Controls whether or not the close button in the dialog header is shown. */
  closeInHeader?: boolean;
  /** Text for the confirm button. Setting this prop will show the confirm button. */
  confirm?: string;
  /** Controls the variant of the confirm button. */
  confirmVariant?: ButtonVariant;
  /** Controls the dialog header text. */
  header?: string;
  /** Adds class names to the dialog header element. */
  headerClassName?: string;
  /** Callback function when the cancel button or the close button in the header is clicked. */
  onCancel?: () => void;
  /** Callback function when the confirm button is clicked. */
  onConfirm?: () => void;
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
  id,
  onCancel = () => {},
  onConfirm = () => {},
  open,
  position,
  returnFocusEl,
  size,
  wrapperClassName,
}: SimpleAlertDialogProps) => {
  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog
      {...{
        animationDirection: `up`,
        backdropClassName,
        closeDialog,
        dialogClassName,
        id,
        leastDestructiveRef,
        open,
        position,
        returnFocusEl,
        size,
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
