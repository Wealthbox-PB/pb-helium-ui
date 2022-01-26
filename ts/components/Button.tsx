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
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;

interface ButtonProps {
  children?: string | JSX.Element[] | JSX.Element;
  className?: string;
  onClick?(): void;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = (
  { children, onClick, variant = `positive`, type = `button`, className = ``, size = `md` }: ButtonProps,
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={classNames(`h-btn h-btn--${variant} h-btn--${size}`, className)}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
