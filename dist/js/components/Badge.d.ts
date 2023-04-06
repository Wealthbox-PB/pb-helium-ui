/// <reference types="react" />
interface BadgeProps {
    children: string | JSX.Element[] | JSX.Element;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
    scale?: `smaller` | `base` | `bigger`;
    variant?: `info` | `negative` | `positive` | `secondary` | `warning`;
}
export declare const Badge: ({ children, className, contentClassName, iconClassName, scale, variant, }: BadgeProps) => JSX.Element;
export {};
