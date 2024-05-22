import React from 'react';
import { Button, ButtonSize, ButtonType, ButtonVariant } from '../Button';
import classNames from 'classnames';

interface DialogFooterActionsProps {
  buttonSize?: ButtonSize;
  cancel?: string;
  cancelRef?: React.RefObject<HTMLButtonElement>;
  cancelVariant?: ButtonVariant;
  confirm?: string;
  confirmRef?: React.RefObject<HTMLButtonElement>;
  confirmVariant?: ButtonVariant;
  confirmClassName?: string;
  confirmType?: ButtonType;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DialogFooterActions = ({
  buttonSize = `md`,
  cancel,
  cancelRef,
  cancelVariant = `secondary`,
  confirm,
  confirmRef,
  confirmVariant = `positive`,
  confirmClassName,
  confirmType = `button`,
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
              ref={confirmRef}
              onClick={onConfirm}
              variant={confirmVariant}
              size={buttonSize}
              className={classNames(`h-btn-margin-left`, confirmClassName)}
              type={confirmType}
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
