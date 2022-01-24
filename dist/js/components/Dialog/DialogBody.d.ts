/// <reference types="react" />
interface DialogBodyProps {
    bodyClass?: string;
    ariaDescriptionSelector?: string;
    children: string | JSX.Element[] | JSX.Element;
}
declare const DialogBody: ({ bodyClass, ariaDescriptionSelector, children }: DialogBodyProps) => JSX.Element;
export { DialogBody };
