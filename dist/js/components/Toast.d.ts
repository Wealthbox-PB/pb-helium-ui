import React from 'react';
import { DialogProps } from '../hooks/useDialog';
interface ToastProps extends DialogProps {
    /** Content for the toast. */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the toast is closed. */
    closeToast: () => void;
    /** Adds class names to the toast element. */
    className?: string;
    /** Number of milliseconds to delay entry of the toast element. */
    delay?: number;
    /** Controls whether the toast animates in. */
    animateIn?: boolean;
    /** Controls whether the toast animates out. */
    animateOut?: boolean;
}
declare const Toast: ({ animateIn, animateOut, children, closeToast, className, delay, id, open, size, wrapperClassName, }: ToastProps) => React.JSX.Element;
export { Toast };
