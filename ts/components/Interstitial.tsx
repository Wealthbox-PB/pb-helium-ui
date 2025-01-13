import React from 'react';
import classNames from 'classnames';

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

const Interstitial = ({
  animate,
  children,
  className,
  contentClassName,
  iconClassName = `h-icon-b-wealthbox`,
  size,
}: InterstitialProps) => (
  <div
    className={classNames(
      `h-interstitial`,
      {
        'h-animate-fade-in': animate,
        'h-interstitial--sm': size === `small`,
      },
      className,
    )}
    data-testid="h-interstitial"
  >
    <span
      className={classNames(`h-interstitial__icon`, iconClassName)}
      aria-hidden="true"
      data-testid="h-interstitial__icon"
    ></span>
    <div
      className={classNames(`h-interstitial__content`, contentClassName)}
      data-testid="h-interstitial__content"
    >
      {children}
    </div>
  </div>
);

export { Interstitial };
