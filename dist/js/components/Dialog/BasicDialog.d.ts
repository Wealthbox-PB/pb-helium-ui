/// <reference types="react" />
interface BasicDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog?: () => void;
    children: string | JSX.Element[] | JSX.Element;
    trapPaused?: boolean;
    dialogClassName?: string;
    dialogRole?: `dialog` | `alertdialog`;
    backdrop?: boolean;
    backdropClassName?: string;
}
export declare const BasicDialog: ({ open, size, position, initialFocusEl, returnFocusEl, closeDialog, children, trapPaused, dialogClassName, dialogRole, backdrop, backdropClassName, }: BasicDialogProps) => JSX.Element;
export {};
