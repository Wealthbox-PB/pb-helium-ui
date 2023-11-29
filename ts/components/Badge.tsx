import React from 'react';
import classNames from 'classnames';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string | JSX.Element[] | JSX.Element;
  className?: string;
  contentClassName?: string;
  iconClassName?: string;
  scale?: `smaller` | `base` | `bigger`;
  variant?: `info` | `negative` | `positive` | `secondary` | `warning`;
}

export const Badge = ({
  children,
  className,
  contentClassName,
  iconClassName,
  scale = `base`,
  variant = `info`,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={classNames(
        `h-badge h-badge--${variant}`,
        { [`h-badge--${scale}`]: scale !== `base` },
        className
      )}
      data-testid="h-badge"
      {...props}
    >
      {iconClassName ? (
        <span
          className={classNames(`h-badge__icon`, iconClassName)}
          aria-hidden="true"
          data-testid="h-badge__icon"
        ></span>
      ) : null}
      <span className={classNames(`h-badge__content`, contentClassName)} data-testid="h-badge__content">
        {children}
      </span>
    </span>
  );
};
