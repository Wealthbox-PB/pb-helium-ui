import React from 'react';
interface ToastProps {
    /** Content for the toast */
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the toast is closed */
    closeToast: () => void;
    /** Controls whether the toast is open or not */
    open: boolean;
    /** Controls whether the toast animates in */
    animateIn?: boolean;
    /** Controls whether the toast animates out */
    animateOut?: boolean;
    /** Adds class names to the toast element. */
    toastClassName?: string;
}
declare const Toast: ({ animateIn, animateOut, children, closeToast, toastClassName, open, }: ToastProps) => React.JSX.Element;
export { Toast };
