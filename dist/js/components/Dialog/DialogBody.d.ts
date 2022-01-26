/// <reference types="react" />
interface DialogBodyProps {
    ariaDescriptionSelector?: string;
    bodyClassName?: string;
    children: string | JSX.Element[] | JSX.Element;
}
declare const DialogBody: ({ bodyClassName, ariaDescriptionSelector, children }: DialogBodyProps) => JSX.Element;
export { DialogBody };
