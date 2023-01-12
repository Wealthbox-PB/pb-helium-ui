import React from 'react';
interface AlertDialogProps {
    backdropClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    dialogClassName?: string;
    leastDestructiveRef?: any;
    open: boolean;
    position?: string;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    size?: string;
}
export declare const AlertDialog: ({ backdropClassName, children, closeDialog, dialogClassName, leastDestructiveRef, open, position, returnFocusEl, size, }: AlertDialogProps) => React.JSX.Element;
export {};
