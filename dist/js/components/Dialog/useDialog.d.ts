/// <reference types="react" />
export type AnimationDirection = `up` | `down` | `left` | `right` | `none`;
export declare function useDialog({ backdrop, closeDialog, dialogClassName, animationClassName, dialogRole, initialFocusEl, open, position, returnFocusEl, size, trapPaused, }: {
    backdrop: any;
    closeDialog?: (() => void) | undefined;
    dialogClassName: any;
    animationClassName: any;
    dialogRole: any;
    initialFocusEl: any;
    open: any;
    position: any;
    returnFocusEl: any;
    size: any;
    trapPaused: any;
}): {
    getDialogRootProps: () => {
        className: string;
    };
    getDialogContainerProps: () => {
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
