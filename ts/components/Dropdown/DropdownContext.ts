import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { useInteractions } from '@floating-ui/react';

interface DropdownContextType {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DropdownContext = createContext<DropdownContextType>({
  activeIndex: null,
  getItemProps: () => ({}),
  setOpen: () => {},
});

export function useDropdownContext() {
  return useContext(DropdownContext);
}
