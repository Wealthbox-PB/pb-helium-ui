import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface HeliumDialogPortalProps {
  children: string | JSX.Element[] | JSX.Element;
}

const portalRoot = (): HTMLElement => document.body;

const HeliumDialogPortal = ({ children }: HeliumDialogPortalProps) => {
  const el = useMemo(() => document.createElement(`div`), []);
  el.className = `h-react-dialog-portal`;

  useEffect(() => {
    portalRoot().appendChild(el);
    return () => {
      portalRoot().removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};

export { HeliumDialogPortal };
