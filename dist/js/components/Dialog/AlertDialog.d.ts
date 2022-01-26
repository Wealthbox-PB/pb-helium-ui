/// <reference types="react" />
interface AlertDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    children: string | JSX.Element[] | JSX.Element;
    dialogClassName?: string;
    backdropClassName?: string;
    leastDestructiveRef?: any;
}
export declare const AlertDialog: ({ open, size, position, initialFocusEl, returnFocusEl, leastDestructiveRef, children, dialogClassName, backdropClassName, }: AlertDialogProps) => JSX.Element;
export {};
