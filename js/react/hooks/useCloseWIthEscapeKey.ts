import { useEffect } from "react";

export const useCloseWithEscapeKey = (keyDownTargetRef: React.MutableRefObject<HTMLElement | null>, closeCallback: () => void, open: boolean) => {
  const handleEscapeKeyPress = (event: KeyboardEvent, closeCallback: () => void) => {
    if (event.key === `Escape`) {
      return closeCallback();
    }
  }
  useEffect(() => {
    const ref = keyDownTargetRef.current;
    if (open) {
      ref?.addEventListener(`keydown`, (event: KeyboardEvent) => handleEscapeKeyPress(event, closeCallback));
    }
    return () => {
      ref?.removeEventListener(`keydown`, (event: KeyboardEvent) => handleEscapeKeyPress(event, closeCallback));
    }
  });
}
