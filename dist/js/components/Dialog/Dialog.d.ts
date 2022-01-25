/// <reference types="react" />
interface DialogProps {
    open: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    submitHandler?: () => void;
    header?: string | JSX.Element[] | JSX.Element;
    headerClassName?: string;
    closeInHeader?: boolean;
    bodyClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
    hasFooter?: boolean;
    footer?: string | JSX.Element[] | JSX.Element;
    footerClassName?: string;
    footerBackground?: boolean;
    trapPaused?: boolean;
    dialogClassName?: string;
    dialogRole?: `dialog` | `alertdialog`;
    backdrop?: boolean;
    backdropClassName?: string;
}
declare const Dialog: ({ open, size, position, initialFocusEl, returnFocusEl, closeDialog, submitHandler, header, headerClassName, closeInHeader, bodyClassName, children, hasFooter, footer, footerBackground, footerClassName, trapPaused, dialogClassName, dialogRole, backdrop, backdropClassName, }: DialogProps) => JSX.Element;
export { Dialog };
