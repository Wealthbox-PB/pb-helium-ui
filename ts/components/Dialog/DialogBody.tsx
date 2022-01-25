import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBodyProps {
  bodyClassName?: string;
  ariaDescriptionSelector?: string;
  children: string | JSX.Element[] | JSX.Element;
}

const DialogBody = ({ bodyClassName = ``, ariaDescriptionSelector = ``, children }: DialogBodyProps) => {
  const context = useDialogContext();

  return (
    <div
      className={classNames(`h-dialog__body`, bodyClassName)}
      id={ariaDescriptionSelector || context.ariaDescriptionSelector}
    >
      {children}
    </div>
  );
};

export { DialogBody };
