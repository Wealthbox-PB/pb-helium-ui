import { useEffect } from 'react';

const scrollLockSelector: string = `h-overflow-hidden`;

export function useScrollLock(
  elementSelector: string | HTMLElement = document.documentElement,
  open: boolean
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
