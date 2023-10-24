/// <reference types="react" />
import { useInteractions } from '@floating-ui/react';
interface SelectContextType {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
    handleSelect: (index: number | null) => void;
    selectedIndex: number | null;
}
export declare const SelectContext: import("react").Context<SelectContextType>;
export declare function useSelectContext(): SelectContextType;
export {};
