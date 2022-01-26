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
  selector?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Portal = ({ children, selector, className = `` }: PortalProps) => {
  const el = useMemo(() => {
    const div = document.createElement(`div`);
    div.classList.add(className);
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
