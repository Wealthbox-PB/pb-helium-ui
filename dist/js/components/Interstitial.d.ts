/// <reference types="react" />
interface InterstitialProps {
    animate?: boolean;
    children: string | JSX.Element[] | JSX.Element;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
    size?: `small`;
}
declare const Interstitial: ({ animate, children, className, contentClassName, iconClassName, size, }: InterstitialProps) => JSX.Element;
export { Interstitial };
