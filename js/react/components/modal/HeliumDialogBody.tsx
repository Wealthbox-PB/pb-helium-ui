import React from "react";

interface HeliumDialogBodyProps {
  bodyClass?: string;
  ariaDescriptionSelector: string;
  children: string | JSX.Element[] | JSX.Element;
}

const HeliumDialogBody = ({ bodyClass = "", ariaDescriptionSelector, children }: HeliumDialogBodyProps) => {
  return (
    <div className={`h-react-dialog__body ${bodyClass}`} id={ariaDescriptionSelector}>{children}</div>
  );
}

export { HeliumDialogBody };
