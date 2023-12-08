import React from 'react';
import { AnimationDistance, AnimationDirection } from '../../index';
interface AlertDialogProps {
    children: string | JSX.Element[] | JSX.Element;
    /** Callback function when the dialog is closed. */
    closeDialog: () => void;
    /** Controls whether the dialog is open or not. */
    open: boolean;
    /** Adds class names to the backdrop element. */
    animateIn?: boolean;
    /** Controls whether the dialog animates out */
    animateOut?: boolean;
    /** Controls the direction that the dialog moves while animating in */
    animationDirection?: AnimationDirection;
    /** Controls the distance that the dialog moves while animating in */
    animationDistance?: AnimationDistance;
    /** Controls whether the dialog have a backdrop overlaying the app. */
    backdropClassName?: string;
    /** Adds class names to the dialog wrapper element. */
    dialogClassName?: string;
    /** Element to focus when the dialog is opened. */
    leastDestructiveRef?: any;
    /** Position of the dialog. Can be "top", "right", "bottom", or "left". Default position is "center". */
    position?: string;
    /** Element to focus when the dialog is closed. */
    returnFocusEl?: string | HTMLElement | (() => HTMLElement) | undefined;
    /** Controls the size of the dialog. Default size is "medium". */
    size?: string;
}
export declare const AlertDialog: ({ animateIn, animateOut, animationDirection, animationDistance, backdropClassName, children, closeDialog, dialogClassName, leastDestructiveRef, open, position, returnFocusEl, size, }: AlertDialogProps) => React.JSX.Element;
export {};
