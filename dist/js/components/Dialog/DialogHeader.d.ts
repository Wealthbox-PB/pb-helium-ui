/// <reference types="react" />
interface DialogHeaderProps {
    ariaLabelSelector?: string;
    children?: string | JSX.Element[] | JSX.Element;
    closeDialog?: () => void;
    closeInHeader?: boolean;
    headerClassName?: string;
}
declare const DialogHeader: ({ ariaLabelSelector, children, closeDialog, closeInHeader, headerClassName, }: DialogHeaderProps) => JSX.Element;
export { DialogHeader };
