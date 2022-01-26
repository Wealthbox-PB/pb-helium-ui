/// <reference types="react" />
interface PortalProps {
    selector?: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
}
declare const Portal: ({ children, selector, className }: PortalProps) => import("react").ReactPortal;
export { Portal };
