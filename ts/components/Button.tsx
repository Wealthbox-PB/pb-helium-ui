import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonVariant =
  | `primary`
  | `secondary`
  | `positive`
  | `negative`
  | `info`
  | `primary-outline`
  | `secondary-outline`
  | `negative-outline`
  | `info-outline`
  | `link-primary`
  | `link-secondary`
  | `border-hover`
  | null;
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
  className?: string;
  focus?: boolean;
  size?: ButtonSize;
  square?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = (
  {
    active = false,
    children,
    className,
    focus = false,
    size = `md`,
    square = false,
    type = `button`,
    variant = `positive`,
    ...props
  }: ButtonProps,
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      className={classNames(
        `h-btn h-btn--${size}`,
        { [`h-btn--${variant}`]: variant },
        {
          'h-btn--active': active,
          'h-btn--focus': focus,
          'h-btn--square': square,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
