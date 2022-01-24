/// <reference types="react" />
interface DialogPortalProps {
    children: string | JSX.Element[] | JSX.Element;
}
declare const DialogPortal: ({ children }: DialogPortalProps) => import("react").ReactPortal;
export { DialogPortal };
