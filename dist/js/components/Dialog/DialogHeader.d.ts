/// <reference types="react" />
interface DialogHeaderProps {
    headerClassName?: string;
    ariaLabelSelector?: string;
    children?: string | JSX.Element[] | JSX.Element;
    dialogRole?: `dialog` | `alertdialog`;
    closeDialog?: () => void;
    closeInHeader?: boolean;
}
declare const DialogHeader: ({ headerClassName, ariaLabelSelector, dialogRole, children, closeDialog, closeInHeader, }: DialogHeaderProps) => JSX.Element;
export { DialogHeader };
