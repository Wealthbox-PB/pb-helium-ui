/// <reference types="react" />
interface DialogFooterProps {
    footerClassName?: string;
    footerBackground?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    submitHandler?: () => void;
}
declare const DialogFooter: ({ children, footerBackground, footerClassName, closeDialog, submitHandler, }: DialogFooterProps) => JSX.Element;
export { DialogFooter };
