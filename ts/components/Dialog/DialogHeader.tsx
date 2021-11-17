import React from 'react';

interface HeliumDialogHeaderProps {
  headerClass?: string;
  ariaLabelSelector: string;
  children?: string | JSX.Element[] | JSX.Element;
  isModalDialog: boolean;
  closeDialog?: () => void;
  closeInHeader?: boolean;
}

const HeliumDialogHeader = ({
  headerClass = ``,
  ariaLabelSelector,
  isModalDialog,
  children,
  closeDialog,
  closeInHeader,
}: HeliumDialogHeaderProps) => {
  return (
    <div className={`h-react-dialog__header ${headerClass}`}>
      <h3 className="h-react-dialog__heading" id={ariaLabelSelector}>
        {children}
      </h3>
      {/* "alertdialogs usually do not have header close buttons, so we check if it's a modal, if it has a
      modal close function to actually close it, AND we also allow consumers to potentially remove the close
      from the header if they want it to appear as an alert and still keep the role="dialog". This is
      because, the role="alertdialog" is only when an alert, error, or warning occurs. In other words, when a
      dialog's information and controls require the user's immediate attention alertdialog should be used
      instead of dialog. */}
      {isModalDialog && closeDialog && closeInHeader && (
        <button
          type="button"
          className="h-react-dialog__close"
          aria-label="Close Dialog"
          onClick={closeDialog}
        >
          <span aria-hidden="true" className="h-icon-delete--lg"></span>
        </button>
      )}
    </div>
  );
};

export { HeliumDialogHeader };
