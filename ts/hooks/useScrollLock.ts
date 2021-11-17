import { useEffect } from 'react';

export const useScrollLock = (elementSelector: string, open: boolean) => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);
    const scrollLockSelector: string = `h-overflow-hidden`;
    const removeScrollLockSelector = () => element?.classList.remove(scrollLockSelector);
    if (open) {
      element?.classList.add(scrollLockSelector);
    } else {
      removeScrollLockSelector();
    }
    return () => {
      removeScrollLockSelector();
    };
  }, [elementSelector, open]);
};
