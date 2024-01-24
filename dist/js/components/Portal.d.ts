/// <reference types="react" />
export interface PortalProps {
    /** Content for the portal. */
    children: JSX.Element | JSX.Element[];
    /** Adds class names to the portal element. */
    className?: string;
    /** Selector for the parent element where the portal element will render. Defaults to document body. */
    selector?: string;
}
declare const Portal: ({ children, selector, className }: PortalProps) => import("react").ReactPortal;
export { Portal };
