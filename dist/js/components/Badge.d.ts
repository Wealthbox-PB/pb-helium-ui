import React from 'react';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string | JSX.Element[] | JSX.Element;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
    scale?: `smaller` | `base` | `bigger`;
    variant?: `info` | `negative` | `positive` | `secondary` | `warning`;
}
export declare const Badge: ({ children, className, contentClassName, iconClassName, scale, variant, ...props }: BadgeProps) => React.JSX.Element;
export {};
