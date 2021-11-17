/// <reference types="react" />
interface HeliumDialogFooterProps {
    footerClass?: string;
    footerBackground?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
    closeDialog: () => void;
    submitHandler?: () => void;
}
declare const HeliumDialogFooter: ({ children, footerBackground, footerClass, closeDialog, submitHandler, }: HeliumDialogFooterProps) => JSX.Element;
export { HeliumDialogFooter };
