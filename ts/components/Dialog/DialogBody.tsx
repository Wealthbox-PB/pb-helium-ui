import React, { useContext } from 'react';
import classNames from 'classnames';
import { DialogContext } from './DialogContext';

interface DialogBodyProps {
  bodyClass?: string;
  ariaDescriptionSelector?: string;
  children: string | JSX.Element[] | JSX.Element;
}

const DialogBody = ({ bodyClass = ``, ariaDescriptionSelector = ``, children }: DialogBodyProps) => {
  const context = useContext(DialogContext);

  return (
    <div
      className={classNames(`h-dialog__body`, bodyClass)}
      id={ariaDescriptionSelector || context.ariaDescriptionSelector}
    >
      {children}
    </div>
  );
};

export { DialogBody };
