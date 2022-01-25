import React, { useContext } from 'react';

export const DialogContext = React.createContext({
  ariaLabelSelector: ``,
  ariaDescriptionSelector: ``,
  closeDialog: () => {},
});

export function useDialogContext() {
  return useContext(DialogContext);
}
