import React from 'react';

interface HeliumDialogFooterProps {
  footerClass?: string;
  footerBackground?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
  closeDialog: () => void;
  submitHandler?: () => void;
}

const HeliumDialogFooter = ({
  children,
  footerBackground = true,
  footerClass = ``,
  closeDialog,
  submitHandler,
}: HeliumDialogFooterProps) => {
  return (
    <div
      className={`h-react-dialog__footer ${
        footerBackground && `h-react-dialog__footer--with-background`
      } ${footerClass}`}
    >
      {children ? (
        children
      ) : (
        <div className="h-react-dialog__footer-cta-container">
          <button type="button" onClick={closeDialog} className="h-btn h-btn--secondary">
            Cancel
          </button>
          {submitHandler && (
            <button onClick={submitHandler} className="h-btn h-btn--positive h-btn-margin-left">
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { HeliumDialogFooter };
