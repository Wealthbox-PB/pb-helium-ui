import { Dispatch, SetStateAction } from 'react';
import { useInteractions } from '@floating-ui/react';
interface SelectContextType {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
    setOpen: Dispatch<SetStateAction<boolean>>;
    handleSelect: (index: number | null) => void;
    selectedIndex: number | null;
}
export declare const SelectContext: import("react").Context<SelectContextType>;
export declare function useSelectContext(): SelectContextType;
export {};
