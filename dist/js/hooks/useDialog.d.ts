/// <reference types="react" />
import { AnimationDistance } from 'types/animation_distance';
import { AnimationDirection } from 'types/animation_direction';
export interface DialogProps {
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
    /** Adds class names to the backdrop element. */
    backdrop?: boolean;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
    /** Adds id attribute to the dialog element. */
    id?: string;
    /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
    position?: `top left` | `top center` | `top right` | `center left` | `center center` | `center right` | `bottom left` | `bottom center` | `bottom right`;
    /** Element to focus when the dialog is closed. */
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: `small` | `medium` | `large` | `xl` | `xxl` | `full`;
    /** Adds class names to the dialog wrapper element. */
    wrapperClassName?: string;
    /** Sets the dialogs aria-role attribute. */
    dialogRole?: `dialog` | `alertdialog`;
    /** Controls whether the focus should be trapped inside of the dialog. */
    trapPaused?: boolean;
    /** Controls whether the focus should be trapped inside of the dialog. */
    trapFocus?: boolean;
    /** Controls the distance the dialog will slide in from. */
    animationDistance?: AnimationDistance;
    /** Controls the direction the dialog will slide in from. */
    animationDirection?: AnimationDirection;
    /** Element to focus when the dialog is opened. */
    initialFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined | false;
}
export declare function useDialog({ backdrop, closeDialog, dialogClassName, wrapperClassName, id, animationDirection, animationDistance, dialogRole, initialFocusEl, open, position, returnFocusEl, size, trapPaused, trapFocus, }: DialogProps): {
    getDialogRootProps: () => {
        className: string;
    };
    getDialogContainerProps: () => {
        ref: import("react").RefObject<HTMLDivElement>;
        className: string;
        role: "dialog" | "alertdialog" | undefined;
        'aria-modal': boolean;
        'aria-labelledby': string;
        'aria-describedby': string;
    };
    getDialogProps: () => {
        id: string | undefined;
        ref: import("react").RefObject<HTMLDivElement>;
        tabIndex: number;
        className: string;
    };
    ariaLabelSelector: string;
    ariaDescriptionSelector: string;
};
