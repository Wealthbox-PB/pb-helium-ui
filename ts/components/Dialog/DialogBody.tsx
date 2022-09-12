import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBodyProps {
  ariaDescriptionSelector?: string;
  bodyClassName?: string;
  children: string | JSX.Element[] | JSX.Element;
}

const DialogBody = ({ bodyClassName = ``, ariaDescriptionSelector = ``, children }: DialogBodyProps) => {
  const context = useDialogContext();

  return (
    <div
      className={classNames(`h-dialog__body`, bodyClassName)}
      id={ariaDescriptionSelector || context.ariaDescriptionSelector}
      data-testid="h-dialog__body"
    >
      {children}
    </div>
  );
};

export { DialogBody };
