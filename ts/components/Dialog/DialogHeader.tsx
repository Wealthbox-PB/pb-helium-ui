import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogHeaderProps {
  headerClassName?: string;
  ariaLabelSelector?: string;
  children?: string | JSX.Element[] | JSX.Element;
  dialogRole?: `dialog` | `alertdialog`;
  closeDialog?: () => void;
  closeInHeader?: boolean;
}

const DialogHeader = ({
  headerClassName = ``,
  ariaLabelSelector = ``,
  dialogRole = `dialog`,
  children,
  closeDialog,
  closeInHeader = true,
}: DialogHeaderProps) => {
  const context = useDialogContext();
  const handleClose = closeDialog || context.closeDialog;

  return (
    <div className={classNames(`h-dialog__header`, headerClassName)}>
      <h3 className="h-dialog__heading" id={ariaLabelSelector || context.ariaLabelSelector}>
        {children}
      </h3>
      {/* "alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
      modal close function to actually close it, AND we also allow consumers to potentially remove the close
      from the header if they want it to appear as an alert and still keep the role="dialog". This is
      because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
      dialog's information and controls require the user's immediate attention alertdialog should be used
      instead of dialog. */}
      {dialogRole === `dialog` && handleClose && closeInHeader ? (
        <button type="button" className="h-dialog__close" aria-label="Close Dialog" onClick={handleClose}>
          <span aria-hidden="true" className="h-icon-delete--lg"></span>
        </button>
      ) : null}
    </div>
  );
};

export { DialogHeader };
