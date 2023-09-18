import React from 'react';
import { Dropdown } from './Dropdown';
import type { Placement } from '@floating-ui/react';
import { Button, ButtonSize, ButtonVariant } from '../Button';
import classNames from 'classnames';
import type { Icons } from '../../types/icons';

interface IconDropdownProps {
  ariaLabel?: string;
  className?: string;
  buttonId?: string;
  iconClassName?: string;
  iconName?: Icons;
  placement?: Placement;
  children: JSX.Element[] | JSX.Element;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const IconDropdown = ({
  ariaLabel,
  className,
  buttonId,
  children,
  iconClassName,
  iconName = `dots`,
  placement = `bottom-end`,
  size = `xs`,
  variant = `border-hover`,
}: IconDropdownProps) => (
  <Dropdown
    renderOpener={({ ref, ...props }) => (
      <Button
        variant={variant}
        size={size}
        ref={ref}
        aria-label={ariaLabel}
        square={true}
        id={buttonId}
        className={className}
        {...props}
      >
        <span className={classNames(`h-icon-${iconName}`, iconClassName)}></span>
      </Button>
    )}
    placement={placement}
  >
    {children}
  </Dropdown>
);

export { IconDropdown };
