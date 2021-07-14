/// <reference types="react" />
interface HeliumDialogHeaderProps {
    headerClass?: string;
    ariaLabelSelector: string;
    children?: string | JSX.Element[] | JSX.Element;
    isModalDialog: boolean;
    closeDialog?: () => void;
    closeInHeader?: boolean;
}
declare const HeliumDialogHeader: ({ headerClass, ariaLabelSelector, isModalDialog, children, closeDialog, closeInHeader }: HeliumDialogHeaderProps) => JSX.Element;
export { HeliumDialogHeader };
