import { Dispatch, SetStateAction } from 'react';
import { useInteractions } from '@floating-ui/react';
interface DropdownContextType {
    activeIndex: number | null;
    getItemProps: ReturnType<typeof useInteractions>[`getItemProps`];
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export declare const DropdownContext: import("react").Context<DropdownContextType>;
export declare function useDropdownContext(): DropdownContextType;
export {};
