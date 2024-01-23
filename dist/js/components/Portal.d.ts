/// <reference types="react" />
export interface PortalProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    selector?: string;
}
declare const Portal: ({ children, selector, className }: PortalProps) => import("react").ReactPortal;
export { Portal };
