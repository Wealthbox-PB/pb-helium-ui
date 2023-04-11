import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const portalRoot = (selector = ``): HTMLElement => {
  let el: HTMLElement | null = null;
  if (selector) {
    el = document.querySelector(selector);
  }
  return el ? el : document.body;
};

interface PortalProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  selector?: string;
}

const Portal = ({ children, selector, className = `` }: PortalProps) => {
  const el = useMemo(() => {
    const div = document.createElement(`div`);
    if (className.length) {
      div.className = className;
    }
    return div;
  }, [className]);

  useEffect(() => {
    portalRoot(selector).appendChild(el);
    return () => {
      portalRoot(selector).removeChild(el);
    };
  }, [el, selector]);
  return createPortal(children, el);
};

export { Portal };
