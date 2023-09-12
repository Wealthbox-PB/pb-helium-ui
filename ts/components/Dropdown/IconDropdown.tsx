import React from 'react';
import { Dropdown } from './Dropdown';
import type { Placement } from '@floating-ui/react';
import { ButtonSize, ButtonVariant } from 'components/Button';
import classNames from 'classnames';

interface IconDropdownProps {
  componentClass?: string;
  buttonAriaLabel?: string;
  buttonClass?: string;
  buttonId?: string;
  iconClass?: string;
  placement?: Placement;
  children: JSX.Element[] | JSX.Element;
  variant?: ButtonVariant | null;
  size?: ButtonSize;
}

const IconDropdown = ({
  buttonAriaLabel = ``,
  buttonClass = ``,
  buttonId = ``,
  children,
  componentClass = ``,
  iconClass = `h-icon-dots`,
  placement = `bottom-end`,
  size = `xs`,
  variant = null,
}: IconDropdownProps) => (
  <Dropdown
    renderOpener={({ ref, ...props }) => (
      <button
        ref={ref}
        className={classNames(`h-btn h-btn--square h-btn--${size}`, buttonClass, {
          [`h-btn--${variant}`]: variant,
          [`h-btn--border-hover`]: !variant,
        })}
        aria-label={buttonAriaLabel}
        id={buttonId}
        {...props}
      >
        <i className={`${iconClass} ${componentClass}`} />
      </button>
    )}
    placement={placement}
  >
    {children}
  </Dropdown>
);

export { IconDropdown };
