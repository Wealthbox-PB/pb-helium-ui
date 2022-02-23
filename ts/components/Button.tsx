import React from 'react';
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
  | `link-secondary`;
export type ButtonSize = `xs` | `sm` | `md` | `lg` | `xl`;
export type ButtonType = `button` | `submit` | `reset`;

interface ButtonProps {
  active?: boolean;
  children?: string | JSX.Element[] | JSX.Element;
  className?: string;
  disabled?: boolean;
  focus?: boolean;
  onClick?(): void;
  size?: ButtonSize;
  square?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = (
  {
    active = false,
    children,
    className = ``,
    disabled = false,
    focus = false,
    onClick = () => {},
    size = `md`,
    square = false,
    type = `button`,
    variant = `positive`,
  }: ButtonProps,
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(`h-btn h-btn--${variant} h-btn--${size}`, className, {
        'h-btn--active': active,
        'h-btn--focus': focus,
        'h-btn--square': square,
      })}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
