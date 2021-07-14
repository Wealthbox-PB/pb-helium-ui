/// <reference types="react" />
interface HeliumDialogPortalProps {
    children: string | JSX.Element[] | JSX.Element;
}
declare const HeliumDialogPortal: ({ children }: HeliumDialogPortalProps) => import("react").ReactPortal;
export { HeliumDialogPortal };
