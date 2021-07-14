/// <reference types="react" />
interface HeliumDialogBodyProps {
    bodyClass?: string;
    ariaDescriptionSelector: string;
    children: string | JSX.Element[] | JSX.Element;
}
declare const HeliumDialogBody: ({ bodyClass, ariaDescriptionSelector, children }: HeliumDialogBodyProps) => JSX.Element;
export { HeliumDialogBody };
