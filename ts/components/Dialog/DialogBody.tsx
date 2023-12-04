import React from 'react';
import classNames from 'classnames';
import { useDialogContext } from './DialogContext';

interface DialogBodyProps {
  /** Content for the dialog body. */
  children: string | JSX.Element[] | JSX.Element;
  /** Used to set the the id attribute of the dialog body */
  ariaDescriptionSelector?: string;
  /** Adds class names to the dialog body container. */
  bodyClassName?: string;
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
