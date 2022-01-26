import classNames from 'classnames';
import React from 'react';

export type ButtonVariant =
  | `primary`
  | `secondary`
  | `positive`
  | `negative`
  | `info`
  | `primary-outline`
  | `secondary-outline`
  | `negative-outline`
  | `info-outline`;

interface ButtonProps {
  children?: string | JSX.Element[] | JSX.Element;
  onClick?(): void;
  type?: `button` | `submit` | `reset`;
  className?: string;
  variant?: ButtonVariant;
}

const Button = (
  { children, onClick, variant = `primary`, type = `button`, className = `` }: ButtonProps,
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={classNames(`h-btn h-btn--${variant}`, className)}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
