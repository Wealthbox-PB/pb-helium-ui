import { createContext, useContext } from 'react';
import { useInteractions } from '@floating-ui/react';

interface SelectContextType {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
  handleSelect: (index: number | null) => void;
  selectedIndex: number | null;
}

export const SelectContext = createContext<SelectContextType>({
  activeIndex: null,
  getItemProps: () => ({}),
  handleSelect: () => {},
  selectedIndex: null,
});

export function useSelectContext() {
  return useContext(SelectContext);
}
