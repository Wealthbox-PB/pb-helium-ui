import React from 'react';
import classNames from 'classnames';

interface DialogFooterProps {
  children?: string | JSX.Element[] | JSX.Element;
  footerBackground?: boolean;
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
