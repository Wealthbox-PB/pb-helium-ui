import React from 'react';
interface DialogFooterProps {
    children?: string | JSX.Element[] | JSX.Element;
    footerBackground?: boolean;
    footerClassName?: string;
}
declare const DialogFooter: ({ children, footerBackground, footerClassName }: DialogFooterProps) => React.JSX.Element;
export { DialogFooter };
