import { useEffect } from "react";

export const useCloseWithEscapeKey = (keyDownTargetRef: React.MutableRefObject<HTMLElement | null>, closeCallback: () => void, open: boolean) => {
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === `Escape`) {
      return closeCallback();
    }
  }
  useEffect(() => {
    const ref = keyDownTargetRef.current;
    if (open) {
      ref?.addEventListener(`keydown`, handleEscapeKeyPress);
    }
    return () => {
      ref?.removeEventListener(`keydown`, handleEscapeKeyPress);
    }
  });
}
