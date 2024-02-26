import React from 'react';
import classNames from 'classnames';
import { ButtonVariant, ButtonSize } from './Button';

interface LinkButtonProps {
  /** The URL the button should navigate to. */
  href: string;
  /** Adds the active style to the button. */
  active?: boolean;
  /** Content for the button. */
  children?: string | JSX.Element[] | JSX.Element;
  /** Adds class names to the button. */
  className?: string;
  /** Adds the focus style to the button. */
  focus?: boolean;
  /** Sets the external relationship of the link. */
  isExternal?: boolean;
  /** Callback for when the button is clicked. */
  onClick?(): void;
  /** Controls the size of the button. */
  size?: ButtonSize;
  /** Adds the square style to the button. */
  square?: boolean;
  /** Controls the variant styling of the button. */
  variant?: ButtonVariant;
}

const LinkButton = ({
  active = false,
  children,
  className = ``,
  focus = false,
  href,
  isExternal = false,
  onClick = () => {},
  size = `md`,
  square = false,
  variant = `positive`,
}: LinkButtonProps) => {
  return (
    <a
      onClick={onClick}
      href={href}
      target={isExternal ? `_blank` : undefined}
      rel={isExternal ? `noopener noreferrer` : undefined}
      className={classNames(`h-btn h-btn--${variant} h-btn--${size}`, className, {
        'h-btn--active': active,
        'h-btn--focus': focus,
        'h-btn--square': square,
      })}
    >
      {children}
    </a>
  );
};

export { LinkButton };
