/// <reference types="react" />
interface HeliumDialogProps {
    open: boolean;
    isModalDialog?: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    submitHandler?: () => void;
    hasHeader?: boolean;
    header?: string | JSX.Element[] | JSX.Element;
    headerClass?: string;
    closeInHeader?: boolean;
    hasBody?: boolean;
    bodyClass?: string;
    children: string | JSX.Element[] | JSX.Element;
    hasFooter?: boolean;
    footer?: string | JSX.Element[] | JSX.Element;
    footerBackground?: boolean;
}
declare const HeliumDialog: ({ open, isModalDialog, size, position, initialFocusEl, closeDialog, submitHandler, hasHeader, header, headerClass, closeInHeader, hasBody, bodyClass, children, hasFooter, footer, footerBackground }: HeliumDialogProps) => JSX.Element;
export { HeliumDialog };
