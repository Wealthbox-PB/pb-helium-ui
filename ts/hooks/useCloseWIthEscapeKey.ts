import { useEffect } from 'react';

export const useCloseWithEscapeKey = (
  keyDownTargetRef: React.MutableRefObject<HTMLElement | null>,
  closeCallback: () => void,
  open: boolean
) => {
  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === `Escape` || event.key === `Esc` || event.keyCode === 27) {
      return closeCallback(); // Consider removing this return based on chris che's suggestion
      // Should we add event.stopPropagation() so this doesn't bubble and cause unwanted ux? https://sarahmhigley.com/writing/escaping-101/
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
};
