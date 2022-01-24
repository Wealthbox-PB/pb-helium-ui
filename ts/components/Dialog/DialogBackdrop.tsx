import React from 'react';

interface DialogBackdropProps {
  handleClick: () => void;
}

export const DialogBackdrop = ({ handleClick }: DialogBackdropProps) => {
  return (
    <button
      type="button"
      className="h-react-dialog__backdrop"
      onClick={handleClick}
      aria-label="Close Dialog"
    ></button>
  );
};
