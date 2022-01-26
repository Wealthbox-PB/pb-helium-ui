/// <reference types="react" />
interface ModalDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    children: string | JSX.Element[] | JSX.Element;
    trapPaused?: boolean;
    dialogClassName?: string;
    backdrop?: boolean;
    backdropClassName?: string;
}
declare const ModalDialog: ({ open, size, position, initialFocusEl, returnFocusEl, closeDialog, children, trapPaused, dialogClassName, backdrop, backdropClassName, }: ModalDialogProps) => JSX.Element;
export { ModalDialog };
