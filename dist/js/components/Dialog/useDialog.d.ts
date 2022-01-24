/// <reference types="react" />
export declare function useDialog({ closeDialog, open, initialFocusEl, returnFocusEl, trapPaused, size, position, dialogRole, }: {
    closeDialog?: (() => void) | undefined;
    open: any;
    initialFocusEl: any;
    returnFocusEl: any;
    trapPaused: any;
    size: any;
    position: any;
    dialogRole: any;
}): {
    getRootProps: () => {
        ref: import("react").RefObject<HTMLDivElement>;
        className: string;
        role: any;
        'aria-modal': boolean;
        'aria-labelledby': string;
        'aria-describedby': string;
    };
    dialogRef: import("react").RefObject<HTMLDivElement>;
    ariaLabelSelector: string;
    ariaDescriptionSelector: string;
};
