import React from 'react';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Content for the badge. */
    children: string | JSX.Element[] | JSX.Element;
    /** Adds class names to the badge. */
    className?: string;
    /** Adds class names to the badge content. */
    contentClassName?: string;
    /** Adds class names to the badge icon. */
    iconClassName?: string;
    /** Controls the size of the badge. */
    scale?: `smaller` | `base` | `bigger`;
    /** Controls the variant of the badge. */
    variant?: `info` | `negative` | `positive` | `secondary` | `warning`;
}
export declare const Badge: ({ children, className, contentClassName, iconClassName, scale, variant, ...props }: BadgeProps) => React.JSX.Element;
export {};
