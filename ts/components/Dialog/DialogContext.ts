import React, { useContext } from 'react';

export const DialogContext = React.createContext({
  ariaDescriptionSelector: ``,
  ariaLabelSelector: ``,
  closeDialog: () => {},
});

export function useDialogContext() {
  return useContext(DialogContext);
}
