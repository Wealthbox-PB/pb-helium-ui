import { createContext, RefObject, useContext } from 'react';
import { useInteractions } from '@floating-ui/react';

interface SelectContextType {
  activeIndex: number | null;
  getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
  handleMultiSelect?: (any) => void;
  handleSearchableSelect?: (label: string | null, value: string | null) => void;
  handleSelect?: (index: number | null, value: string | null) => void;
  multiSelectValue?: any[];
  selectedValue?: string | null;
  setActiveIndex: (index: number | null) => void;
  searchInputRef?: RefObject<HTMLInputElement>;
}

export const SelectContext = createContext<SelectContextType>({
  activeIndex: null,
  getItemProps: () => ({}),
  handleMultiSelect: () => {},
  handleSearchableSelect: () => {},
  handleSelect: () => {},
  multiSelectValue: [],
  selectedValue: null,
  setActiveIndex: () => {},
  searchInputRef: { current: null },
});

export function useSelectContext() {
  return useContext(SelectContext);
}
