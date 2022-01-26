import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogHeaderProps {
  ariaLabelSelector?: string;
  children?: string | JSX.Element[] | JSX.Element;
  closeDialog?: () => void;
  closeInHeader?: boolean;
  headerClassName?: string;
}

const DialogHeader = ({
  ariaLabelSelector = ``,
  children,
  closeDialog,
  closeInHeader = true,
  headerClassName = ``,
}: DialogHeaderProps) => {
  const context = useDialogContext();
  const handleClose = closeDialog || context.closeDialog;

  return (
    <div className={classNames(`h-dialog__header`, headerClassName)}>
      <h3 className="h-dialog__heading" id={ariaLabelSelector || context.ariaLabelSelector}>
        {children}
      </h3>
      {closeInHeader ? (
        <button type="button" className="h-dialog__close" aria-label="Close Dialog" onClick={handleClose}>
          <span aria-hidden="true" className="h-icon-delete--lg"></span>
        </button>
      ) : null}
    </div>
  );
};

export { DialogHeader };
