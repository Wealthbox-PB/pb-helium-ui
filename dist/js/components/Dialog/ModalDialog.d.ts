import React from 'react';
interface ModalDialogProps {
    backdrop?: boolean;
    backdropClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    dialogClassName?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
    open: boolean;
    position?: string;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
    size?: string;
    trapPaused?: boolean;
}
declare const ModalDialog: ({ backdrop, backdropClassName, children, closeDialog, dialogClassName, initialFocusEl, open, position, returnFocusEl, size, trapPaused, }: ModalDialogProps) => React.JSX.Element;
export { ModalDialog };
