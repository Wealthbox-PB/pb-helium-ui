import React, { useContext } from 'react';
import { useInteractions } from '@floating-ui/react';

interface DropdownContextType {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
}

export const DropdownContext = React.createContext<DropdownContextType>({
  activeIndex: null,
  getItemProps: () => ({}),
});

export function useDropdownContext() {
  return useContext(DropdownContext);
}
