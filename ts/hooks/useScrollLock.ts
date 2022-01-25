import { useEffect } from 'react';

const scrollLockSelector: string = `h-overflow-hidden`;

export function useScrollLock(
  open: boolean,
  elementSelector: string | HTMLElement = document.documentElement
) {
  useEffect(() => {
    const element =
      typeof elementSelector === `string` ? document.querySelector(elementSelector) : elementSelector;

    if (open) {
      element?.classList.add(scrollLockSelector);
    }

    return () => {
      removeScrollLockSelector(element);
    };
  }, [elementSelector, open]);
}

function removeScrollLockSelector(element) {
  element?.classList.remove(scrollLockSelector);
}
