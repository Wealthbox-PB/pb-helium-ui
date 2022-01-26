import React from 'react';
import classNames from 'classnames';

interface DialogFooterProps {
  footerClassName?: string;
  footerBackground?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
}

const DialogFooter = ({ children, footerBackground = true, footerClassName = `` }: DialogFooterProps) => {
  return (
    <div
      className={classNames(`h-dialog__footer`, footerClassName, {
        'h-dialog__footer--with-background': footerBackground,
      })}
    >
      <div className="h-dialog__footer-cta-container">{children}</div>
    </div>
  );
};

export { DialogFooter };
