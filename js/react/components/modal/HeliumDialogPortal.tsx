import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const portalRoot = (): HTMLElement => document.body;

interface HeliumDialogPortalProps {
  children: string | JSX.Element[] | JSX.Element;
}

const HeliumDialogPortal: React.FC<HeliumDialogPortalProps> = ({ children }) => {
  const el = document.createElement(`div`);
  el.setAttribute(`class`, `h-react-dialog-portal`)
  useEffect(() => {
    portalRoot().appendChild(el);
    return () => {
      portalRoot().removeChild(el);
    };
  }, [el]);
  return createPortal(children, el);
}

export { HeliumDialogPortal } ;
