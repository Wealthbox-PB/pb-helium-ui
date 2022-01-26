import React from 'react';
import { Button } from '../Button';

interface DialogFooterActionsProps {
  cancel?: any;
  confirm?: any;
  cancelVariant?: any;
  confirmVariant?: any;
  onConfirm?: any;
  onCancel?: any;
  cancelRef?: any;
}

const DialogFooterActions = ({
  confirm = ``,
  cancel = ``,
  confirmVariant = `positive`,
  cancelVariant = `secondary`,
  cancelRef,
  onCancel = () => {},
  onConfirm = () => {},
}: DialogFooterActionsProps) => {
  return (
    <>
      {cancel || confirm ? (
        <>
          {cancel ? (
            <Button onClick={onCancel} variant={cancelVariant} ref={cancelRef}>
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
        <Button onClick={onCancel} ref={cancelRef}>
          OK
        </Button>
      )}
    </>
  );
};

export { DialogFooterActions };
