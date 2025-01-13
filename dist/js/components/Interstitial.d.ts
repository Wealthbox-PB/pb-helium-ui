import React from 'react';
interface InterstitialProps {
    /** Content for the interstitial. */
    children: string | JSX.Element[] | JSX.Element;
    /** Controls if the interstitial should animate in. */
    animate?: boolean;
    /** Adds class names to the interstitial. */
    className?: string;
    /** Adds class names to the interstitial content. */
    contentClassName?: string;
    /** Adds class names to the interstitial icon. */
    iconClassName?: string;
    /** Controls the size of the interstitial. */
    size?: `small`;
}
declare const Interstitial: ({ animate, children, className, contentClassName, iconClassName, size, }: InterstitialProps) => React.JSX.Element;
export { Interstitial };
