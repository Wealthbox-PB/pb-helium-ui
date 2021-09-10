import { useEffect } from "react";

export const useScrollLock = (elementSelector: string, open: boolean) => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);
    const removeScrollLockSelector = () => element?.classList.remove(scrollLockSelector);
    const scrollLockSelector: string = `h-overflow-hidden`;
    if (open) {
      element?.classList.add(scrollLockSelector);
    }
    else {
      removeScrollLockSelector();
    }
    return () => {
      removeScrollLockSelector();
    }
  }, [elementSelector, open])
};
