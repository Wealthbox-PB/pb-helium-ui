import React, { TextareaHTMLAttributes } from 'react';
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Adds class names to the textarea. */
    className?: string;
    /** Sets an id for the textarea. */
    id?: string;
    /** Sets a label for the textarea. */
    label?: string;
    /** Adds class names to the label. */
    labelClassName?: string;
}
declare const TextAreaRef: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<unknown>>;
export { TextAreaRef as TextArea };
