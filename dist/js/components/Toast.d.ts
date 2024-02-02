import React from 'react';
interface ToastProps {
    /** Content for the toast. */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the toast is closed. */
    closeToast: () => void;
    /** Controls whether the toast is open or not. */
    open: boolean;
    /** Adds class names to the toast element. */
    className?: string;
    /** Number of milliseconds to delay entry of the toast element. */
    delay?: number;
    /** Controls whether the toast animates in. */
    animateIn?: boolean;
    /** Controls whether the toast animates out. */
    animateOut?: boolean;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: string;
}
declare const Toast: ({ animateIn, animateOut, children, closeToast, className, delay, open, size, }: ToastProps) => React.JSX.Element;
export { Toast };
