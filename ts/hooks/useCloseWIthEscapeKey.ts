import { useEffect } from 'react';

export function useCloseWithEscapeKey(
  closeCallback: () => void,
  open: boolean,
  keyDownTargetRef?: React.MutableRefObject<HTMLElement | null>,
) {
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === `Escape` || event.key === `Esc` || event.keyCode === 27) {
      closeCallback();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    const element = keyDownTargetRef ? keyDownTargetRef.current : document;

    if (open) {
      element?.addEventListener(`keydown`, handleEscapeKeyPress);
    }

    return () => {
      element?.removeEventListener(`keydown`, handleEscapeKeyPress);
    };
  });
}
