import React from 'react';
import classNames from 'classnames';
import { ButtonVariant, ButtonSize } from './Button';

interface LinkButtonProps {
  active?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
  className?: string;
  focus?: boolean;
  href: string;
  isExternal?: boolean;
  size?: ButtonSize;
  square?: boolean;
  variant?: ButtonVariant;
}

const LinkButton = ({
  active = false,
  children,
  className = ``,
  focus = false,
  href,
  isExternal = false,
  size = `md`,
  square = false,
  variant = `positive`,
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      target={isExternal ? `_blank` : undefined}
      rel={isExternal ? `noopener noreferrer` : undefined}
      className={classNames(`h-btn h-btn--${variant} h-btn--${size}`, className, {
        [`h-btn--active`]: active,
        [`h-btn--focus`]: focus,
        [`h-btn--square`]: square,
      })}
    >
      {children}
    </a>
  );
};

export { LinkButton };
