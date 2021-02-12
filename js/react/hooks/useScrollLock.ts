import { useEffect } from "react";

export const useScrollLock = (elementSelector: string, open: boolean) => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);
    const scrollLockSelector: string = `h-overflow-hidden`;
    if (open) {
      element?.classList.add(scrollLockSelector);
      return () => {
        element?.classList.remove(scrollLockSelector);
      }
    }
  })
};
