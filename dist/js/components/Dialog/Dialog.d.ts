/// <reference types="react" />
interface HeliumDialogProps {
    open: boolean;
    isModalDialog?: boolean;
    size?: string;
    position?: string;
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    closeDialog: () => void;
    submitHandler?: () => void;
    header?: string | JSX.Element[] | JSX.Element;
    headerClass?: string;
    closeInHeader?: boolean;
    bodyClass?: string;
    children: string | JSX.Element[] | JSX.Element;
    footer?: string | JSX.Element[] | JSX.Element;
    footerBackground?: boolean;
}
declare const HeliumDialog: ({ open, isModalDialog, size, position, initialFocusEl, closeDialog, submitHandler, header, headerClass, closeInHeader, bodyClass, children, footer, footerBackground, }: HeliumDialogProps) => JSX.Element;
export { HeliumDialog };
