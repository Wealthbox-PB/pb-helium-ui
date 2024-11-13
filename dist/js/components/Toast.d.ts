import React from 'react';
import { DialogProps } from '../hooks/useDialog';
import { PortalProps } from './Portal';
interface ToastProps extends DialogProps {
    /** Content for the toast. */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the toast is closed. */
    closeToast: () => void;
    /** Controls whether the toast animates in. */
    animateIn?: boolean;
    /** Controls whether the toast animates out. */
    animateOut?: boolean;
    /** Adds class names to the toast element. */
    className?: string;
    /** Number of milliseconds to delay entry of the toast element. */
    delay?: number;
    /** Props passed into the Portal element. */
    portalProps?: Omit<PortalProps, `children`>;
}
declare const Toast: ({ animateIn, animateOut, children, closeToast, className, delay, id, open, portalProps, size, wrapperClassName, }: ToastProps) => React.JSX.Element;
export { Toast };
