/// <reference types="react" />
interface HeliumDialogProps {
    open: boolean;
    isModalDialog?: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    submitHandler?: () => void;
    header?: string | JSX.Element[] | JSX.Element;
    headerClass?: string;
    closeInHeader?: boolean;
    bodyClass?: string;
    children: string | JSX.Element[] | JSX.Element;
    hasFooter?: boolean;
    footer?: string | JSX.Element[] | JSX.Element;
    footerBackground?: boolean;
    trapPaused?: boolean;
    dialogElClass?: string;
}
declare const HeliumDialog: ({ open, isModalDialog, size, position, initialFocusEl, returnFocusEl, closeDialog, submitHandler, header, headerClass, closeInHeader, bodyClass, children, hasFooter, footer, footerBackground, trapPaused, dialogElClass, }: HeliumDialogProps) => JSX.Element;
export { HeliumDialog };
