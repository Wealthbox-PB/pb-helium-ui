import React, { useContext } from 'react';
import { useInteractions } from '@floating-ui/react';

interface DropdownContextType {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownContext = React.createContext<DropdownContextType>({
  activeIndex: null,
  getItemProps: () => ({}),
  setOpen: () => {},
});

export function useDropdownContext() {
  return useContext(DropdownContext);
}
