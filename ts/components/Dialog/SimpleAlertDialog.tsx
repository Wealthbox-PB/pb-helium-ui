import React, { useRef } from 'react';
import { AlertDialog } from './AlertDialog';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogBody } from './DialogBody';
import { Button, ButtonVariant } from '../Button';

interface SimpleAlertDialogProps {
  open: boolean;
  size?: string;
  position?: string;
  initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
  onCancel?: () => void;
  onConfirm?: () => void;
  children: string | JSX.Element[] | JSX.Element;
  dialogClassName?: string;
  backdropClassName?: string;
  header?: string;
  cancel?: string;
  cancelVariant?: ButtonVariant;
  confirm?: string;
  confirmVariant?: ButtonVariant;
}

export const SimpleAlertDialog = ({
  header = ``,
  cancel = ``,
  cancelVariant = `secondary`,
  confirm = ``,
  confirmVariant = `positive`,
  open,
  size,
  position,
  initialFocusEl,
  returnFocusEl,
  onCancel = () => {},
  onConfirm = () => {},
  children,
  dialogClassName,
  backdropClassName,
}: SimpleAlertDialogProps) => {
  const leastDestructiveRef = useRef(null);

  return (
    <AlertDialog
      {...{
        open,
        size,
        position,
        initialFocusEl,
        returnFocusEl,
        dialogClassName,
        backdropClassName,
        leastDestructiveRef,
      }}
    >
      <>
        {header ? <DialogHeader closeInHeader={false}>{header}</DialogHeader> : ``}
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          {cancel || confirm ? (
            <>
              {cancel ? (
                <Button onClick={onCancel} variant={cancelVariant} ref={leastDestructiveRef}>
                  {cancel}
                </Button>
              ) : null}
              {confirm ? (
                <Button onClick={onConfirm} variant={confirmVariant} className="h-btn-margin-left">
                  {confirm}
                </Button>
              ) : null}
            </>
          ) : (
            <Button onClick={onCancel} ref={leastDestructiveRef}>
              OK
            </Button>
          )}
        </DialogFooter>
      </>
    </AlertDialog>
  );
};
