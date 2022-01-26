/// <reference types="react" />
interface DialogHeaderProps {
    headerClassName?: string;
    ariaLabelSelector?: string;
    children?: string | JSX.Element[] | JSX.Element;
    closeDialog?: () => void;
    closeInHeader?: boolean;
}
declare const DialogHeader: ({ headerClassName, ariaLabelSelector, children, closeDialog, closeInHeader, }: DialogHeaderProps) => JSX.Element;
export { DialogHeader };
