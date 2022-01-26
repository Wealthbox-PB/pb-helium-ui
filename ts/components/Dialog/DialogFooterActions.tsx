import React from 'react';
import { Button, ButtonSize, ButtonVariant } from '../Button';

interface DialogFooterActionsProps {
  buttonSize?: ButtonSize;
  cancel?: string;
  cancelRef?: any;
  cancelVariant?: ButtonVariant;
  confirm?: string;
  confirmVariant?: ButtonVariant;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DialogFooterActions = ({
  buttonSize = `md`,
  cancel = ``,
  cancelRef,
  cancelVariant = `secondary`,
  confirm = ``,
  confirmVariant = `positive`,
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
