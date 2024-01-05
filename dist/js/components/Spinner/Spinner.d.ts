import React from 'react';
export interface SpinnerProps {
    /** Class name for styling the spinner wrapper element. */
    modifierClass?: string;
    /** Text for screen readers. */
    screenReaderText?: string;
    /** Size of the spinner. */
    size?: `sm` | `md` | `lg` | `small` | `large`;
    /** Color theme of the spinner. Dark theme returns a white graphical PNG asset. */
    theme?: `light` | `dark`;
}
declare const Spinner: ({ modifierClass, screenReaderText, size, theme, }: SpinnerProps) => React.JSX.Element;
export { Spinner };
