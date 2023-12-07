import React, { useRef } from 'react';
import { AlertDialog } from './AlertDialog';
import { AnimationDirection } from '../../index';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { ButtonSize, ButtonVariant } from '../Button';
import { DialogFooterActions } from './DialogFooterActions';

interface SimpleAlertDialogProps {
  animationDirection?: AnimationDirection;
  /** Content for the dialog. */
  children: string | JSX.Element[] | JSX.Element;
  /** Callback function when the dialog is closed. */
  closeDialog: () => void;
  /** Controls whether the dialog is open or not. */
  open: boolean;
  /** Adds class names to the backdrop element. */
  backdropClassName?: string;
  /** Controls the size of the footer action buttons. */
  buttonSize?: ButtonSize;
  /** Text for the cancel button */
  cancel?: string;
  /** Controls the variant of the cancel button. */
  cancelVariant?: ButtonVariant;
  /** Controls whether or not the close button in the dialog header is shown. */
  closeInHeader?: boolean;
  /** Text for the confirm button */
  confirm?: string;
  /** Controls the variant of the confirm button. */
  confirmVariant?: ButtonVariant;
  /** Adds class names to the dialog wrapper element. */
  dialogClassName?: string;
  /** Controls the dialog header text. */
  header?: string;
  /** Adds class names to the dialog header element. */
  headerClassName?: string;
  /** Callback function when the cancel button or the close button in the header is clicked. */
  onCancel?: () => void;
  /** Callback function when the confirm button is clicked. */
  onConfirm?: () => void;
  /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
  position?: string;
  /** Element to focus when the dialog is closed. */
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  /** Controls the size of the dialog. Default size is "medium". */
  size?: string;
}

export const SimpleAlertDialog = ({
  animationDirection = `up`,
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
  onCancel = () => { },
  onConfirm = () => { },
  open,
  position,
  returnFocusEl,
  size,
}: SimpleAlertDialogProps) => {
  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog
      {...{
        animationDirection,
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
