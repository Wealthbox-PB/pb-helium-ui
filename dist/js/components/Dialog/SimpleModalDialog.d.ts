/// <reference types="react" />
interface SimpleModalDialogProps {
    backdrop?: boolean;
    backdropClassName?: string;
    bodyClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    closeInHeader?: boolean;
    dialogClassName?: string;
    dialogRole?: `dialog` | `alertdialog`;
    footer?: string | JSX.Element[] | JSX.Element;
    footerBackground?: boolean;
    footerClassName?: string;
    header?: string | JSX.Element[] | JSX.Element;
    headerClassName?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    open: boolean;
    position?: string;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    size?: string;
    trapPaused?: boolean;
}
declare const SimpleModalDialog: ({ backdrop, backdropClassName, bodyClassName, children, closeDialog, closeInHeader, dialogClassName, footer, footerBackground, footerClassName, header, headerClassName, initialFocusEl, open, position, returnFocusEl, size, trapPaused, }: SimpleModalDialogProps) => JSX.Element;
export { SimpleModalDialog };
