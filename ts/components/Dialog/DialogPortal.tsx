import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface DialogPortalProps {
  children: string | JSX.Element[] | JSX.Element;
}

const portalRoot = (): HTMLElement => document.body;

const DialogPortal = ({ children }: DialogPortalProps) => {
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

export { DialogPortal };
