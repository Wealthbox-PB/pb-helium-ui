import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonVariant =
  | `primary`
  | `secondary`
  | `positive`
  | `negative`
  | `info`
  | `magic`
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
  /** Adds the active style to the button. */
  active?: boolean;
  /** Content for the button. */
  children?: string | JSX.Element[] | JSX.Element;
  /** Adds class names to the button. */
  className?: string;
  /** Adds the focus style to the button. */
  focus?: boolean;
  /** Controls the size of the button. */
  size?: ButtonSize;
  /** Adds the square style to the button. */
  square?: boolean;
  /** Controls the type of the button. */
  type?: ButtonType;
  /** Controls the variant styling of the button. */
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
  ref,
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
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
