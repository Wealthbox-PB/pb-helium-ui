import React from 'react';
interface HeliumSpinnerProps {
    /** Class name for styling the spinner wrapper element. */
    modifierClass?: string;
    /** Text for screen readers. */
    screenReaderText?: string;
    /** Size of the spinner. */
    size?: `sm` | `md` | `lg`;
    /** Color theme of the spinner. Dark theme returns a white graphical PNG asset. */
    theme?: `light` | `dark`;
}
declare const HeliumSpinner: ({ modifierClass, screenReaderText, size, theme, }: HeliumSpinnerProps) => React.JSX.Element;
export { HeliumSpinner };
