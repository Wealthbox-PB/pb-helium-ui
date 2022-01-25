import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogFooterProps {
  footerClass?: string;
  footerBackground?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
  closeDialog: () => void;
  submitHandler?: () => void;
}

const DialogFooter = ({
  children,
  footerBackground = true,
  footerClass = ``,
  closeDialog,
  submitHandler,
}: DialogFooterProps) => {
  const context = useDialogContext();

  return (
    <div
      className={classNames(`h-dialog__footer`, footerClass, {
        'h-dialog__footer--with-background': footerBackground,
      })}
    >
      {children ? (
        children
      ) : (
        <div className="h-dialog__footer-cta-container">
          <button
            type="button"
            onClick={closeDialog || context.closeDialog}
            className="h-btn h-btn--secondary"
          >
            Cancel
          </button>
          {submitHandler ? (
            <button onClick={submitHandler} className="h-btn h-btn--positive h-btn-margin-left">
              Submit
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export { DialogFooter };
