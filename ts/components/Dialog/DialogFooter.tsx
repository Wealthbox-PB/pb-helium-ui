import React from 'react';
import classNames from 'classnames';

interface DialogFooterProps {
  /** Content for the dialog footer. */
  children?: string | JSX.Element[] | JSX.Element;
  /** Controls whether or not the dialog footer should have a light-gray background. */
  footerBackground?: boolean;
  /** Adds class names to the dialog footer element. */
  footerClassName?: string;
}

const DialogFooter = ({ children, footerBackground = true, footerClassName = `` }: DialogFooterProps) => {
  return (
    <footer
      className={classNames(`h-dialog__footer`, footerClassName, {
        'h-dialog__footer--with-background': footerBackground,
      })}
    >
      {children ? (
        <div className="h-dialog__footer-cta-container" data-testid="h-dialog__footer-cta-container">
          {children}
        </div>
      ) : null}
    </footer>
  );
};

export { DialogFooter };
