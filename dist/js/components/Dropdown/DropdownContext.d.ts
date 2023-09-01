import React from 'react';
import { useInteractions } from '@floating-ui/react';
interface DropdownContextType {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const DropdownContext: React.Context<DropdownContextType>;
export declare function useDropdownContext(): DropdownContextType;
export {};
