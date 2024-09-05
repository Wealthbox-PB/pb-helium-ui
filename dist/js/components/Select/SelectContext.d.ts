import { RefObject } from 'react';
import { useInteractions } from '@floating-ui/react';
interface SelectContextType {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
    handleMultiSelect?: (any: any) => void;
    handleSearchableSelect?: (label: string | null, value: string | null) => void;
    handleSelect?: (index: number | null, value: string | null) => void;
    multiSelectValue?: any[];
    selectedValue?: string | null;
    setActiveIndex: (index: number | null) => void;
    searchInputRef?: RefObject<HTMLInputElement>;
}
export declare const SelectContext: import("react").Context<SelectContextType>;
export declare function useSelectContext(): SelectContextType;
export {};
