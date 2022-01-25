/// <reference types="react" />
export declare function useDialog({ closeDialog, open, initialFocusEl, returnFocusEl, trapPaused, size, position, dialogClassName, dialogRole, backdrop, }: {
    closeDialog?: (() => void) | undefined;
    open: any;
    initialFocusEl: any;
    returnFocusEl: any;
    trapPaused: any;
    size: any;
    position: any;
    dialogClassName: any;
    dialogRole: any;
    backdrop: any;
}): {
    getRootProps: () => {
        ref: import("react").RefObject<HTMLDivElement>;
        className: string;
        role: any;
        'aria-modal': boolean;
        'aria-labelledby': string;
        'aria-describedby': string;
    };
    getDialogProps: () => {
        ref: import("react").RefObject<HTMLDivElement>;
        tabIndex: number;
        className: string;
    };
    ariaLabelSelector: string;
    ariaDescriptionSelector: string;
};
