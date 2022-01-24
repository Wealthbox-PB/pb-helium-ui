/// <reference types="react" />
interface BasicDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    children: string | JSX.Element[] | JSX.Element;
    trapPaused?: boolean;
    dialogElClass?: string;
    dialogRole?: `dialog` | `alertdialog`;
}
export declare const BasicDialog: ({ open, size, position, initialFocusEl, returnFocusEl, closeDialog, children, trapPaused, dialogElClass, dialogRole, }: BasicDialogProps) => JSX.Element;
export {};
