/// <reference types="react" />
interface DialogHeaderProps {
    headerClass?: string;
    ariaLabelSelector?: string;
    children?: string | JSX.Element[] | JSX.Element;
    dialogRole?: `dialog` | `alertdialog`;
    closeDialog?: () => void;
    closeInHeader?: boolean;
}
declare const DialogHeader: ({ headerClass, ariaLabelSelector, dialogRole, children, closeDialog, closeInHeader, }: DialogHeaderProps) => JSX.Element;
export { DialogHeader };
