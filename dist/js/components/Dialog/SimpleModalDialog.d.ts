/// <reference types="react" />
interface SimpleModalDialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    header?: string | JSX.Element[] | JSX.Element;
    headerClassName?: string;
    closeInHeader?: boolean;
    bodyClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    footer?: string | JSX.Element[] | JSX.Element;
    footerClassName?: string;
    footerBackground?: boolean;
    trapPaused?: boolean;
    dialogClassName?: string;
    dialogRole?: `dialog` | `alertdialog`;
    backdrop?: boolean;
    backdropClassName?: string;
}
declare const SimpleModalDialog: ({ open, size, position, initialFocusEl, returnFocusEl, closeDialog, header, headerClassName, closeInHeader, bodyClassName, children, footer, footerBackground, footerClassName, trapPaused, dialogClassName, backdrop, backdropClassName, }: SimpleModalDialogProps) => JSX.Element;
export { SimpleModalDialog };
