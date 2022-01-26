/// <reference types="react" />
interface AlertDialogProps {
    backdropClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    dialogClassName?: string;
    leastDestructiveRef?: any;
    open: boolean;
    position?: string;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    size?: string;
}
export declare const AlertDialog: ({ backdropClassName, children, dialogClassName, leastDestructiveRef, open, position, returnFocusEl, size, }: AlertDialogProps) => JSX.Element;
export {};
