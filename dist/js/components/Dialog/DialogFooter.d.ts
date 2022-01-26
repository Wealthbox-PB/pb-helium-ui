/// <reference types="react" />
interface DialogFooterProps {
    footerClassName?: string;
    footerBackground?: boolean;
    children?: string | JSX.Element[] | JSX.Element;
}
declare const DialogFooter: ({ children, footerBackground, footerClassName }: DialogFooterProps) => JSX.Element;
export { DialogFooter };
