import React from 'react';
import { Button, ButtonSize, ButtonVariant } from '../Button';

interface DialogFooterActionsProps {
  cancel?: string;
  confirm?: string;
  cancelVariant?: ButtonVariant;
  confirmVariant?: ButtonVariant;
  buttonSize?: ButtonSize;
  onConfirm?: () => void;
  onCancel?: () => void;
  cancelRef?: any;
}

const DialogFooterActions = ({
  confirm = ``,
  cancel = ``,
  confirmVariant = `positive`,
  cancelVariant = `secondary`,
  buttonSize = `md`,
  cancelRef,
  onCancel = () => {},
  onConfirm = () => {},
}: DialogFooterActionsProps) => {
  return (
    <>
      {cancel || confirm ? (
        <>
          {cancel ? (
            <Button onClick={onCancel} variant={cancelVariant} size={buttonSize} ref={cancelRef}>
              {cancel}
            </Button>
          ) : null}
          {confirm ? (
            <Button
              onClick={onConfirm}
              variant={confirmVariant}
              size={buttonSize}
              className="h-btn-margin-left"
            >
              {confirm}
            </Button>
          ) : null}
        </>
      ) : (
        <Button onClick={onCancel} ref={cancelRef}>
          OK
        </Button>
      )}
    </>
  );
};

export { DialogFooterActions };
