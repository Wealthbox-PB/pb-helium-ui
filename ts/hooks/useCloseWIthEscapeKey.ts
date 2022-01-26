import { useEffect } from 'react';

export function useCloseWithEscapeKey(
  closeCallback: () => void,
  keyDownTargetRef: React.MutableRefObject<HTMLElement | null>,
  open: boolean
) {
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === `Escape` || event.key === `Esc` || event.keyCode === 27) {
      closeCallback();
      event.stopPropagation();
    }
  };
  useEffect(() => {
    const ref = keyDownTargetRef.current;
    if (open) {
      ref?.addEventListener(`keydown`, handleEscapeKeyPress);
    }
    return () => {
      ref?.removeEventListener(`keydown`, handleEscapeKeyPress);
    };
  });
}
