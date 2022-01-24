/// <reference types="react" />
interface DialogFooterProps {
    footerClass?: string;
    footerBackground?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    submitHandler?: () => void;
}
declare const DialogFooter: ({ children, footerBackground, footerClass, closeDialog, submitHandler, }: DialogFooterProps) => JSX.Element;
export { DialogFooter };
