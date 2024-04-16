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

export interface ButtonStyleProps {
  /** Adds the active style to the button. */
  active?: boolean;
  /** Additional classes to apply to the button */
  className?: string;
  /** Adds disabled style to the button */
  disabled?: boolean;
  /** Adds the focus style to the button. */
  focus?: boolean;
  /** Controls the size of the button. */
  size?: ButtonSize;
  /** Adds the square style to the button. */
  square?: boolean;
  /** Controls the variant styling of the button. */
  variant?: ButtonVariant;
}

interface ButtonProps extends ButtonStyleProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** Controls the type of the button. */
  type?: ButtonType;
}

export function buttonClassNames({
  active,
  className,
  disabled,
  focus,
  size,
  square,
  variant,
}: ButtonStyleProps) {
  return classNames(
    `h-btn h-btn--${size}`,
    className,
    { [`h-btn--${variant}`]: variant },
    {
      'h-btn--active': active,
      'h-btn--focus': focus,
      'h-btn--square': square,
      'h-btn--disabled': disabled,
    },
  );
}

const Button = (
  {
    active = false,
    children,
    className,
    disabled = false,
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
      className={buttonClassNames({ active, className, disabled, focus, size, square, variant })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonRef = React.forwardRef(Button);

export { ButtonRef as Button };
