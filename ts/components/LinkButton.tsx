import React, { useCallback, useState } from 'react';
import { ButtonStyleProps, buttonClassNames } from './Button';

interface LinkButtonProps extends ButtonStyleProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** True if the link should prevent repeated clicks */
  disableAfterClick?: boolean;
  /** Sets the external relationship of the link. */
  isExternal?: boolean;
}

const LinkButton = ({
  active = false,
  children,
  className,
  disableAfterClick = false,
  disabled: disabledOnInitialRender = false,
  focus = false,
  href,
  isExternal = false,
  onClick: originalOnClick = () => {},
  size = `md`,
  square = false,
  variant = `positive`,
  ...props
}: LinkButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(disabledOnInitialRender);
  const styleProps = { active, className, focus, disabled: isDisabled, size, square, variant };

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      if (isDisabled) {
        event.preventDefault();
      } else {
        originalOnClick(event);
        setIsDisabled(disableAfterClick);
      }
    },
    [isDisabled, originalOnClick, disableAfterClick],
  );

  if (isExternal) {
    props.rel ||= `noopener noreferrer`;
    props.target ||= `_blank`;
  }

  return (
    <a onClick={onClick} href={href} className={buttonClassNames(styleProps)} {...props}>
      {children}
    </a>
  );
};

export { LinkButton };
