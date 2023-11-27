import React, { ComponentProps } from 'react';
import { Dropdown } from './Dropdown';
import { Button, ButtonSize, ButtonVariant } from '../Button';
import classNames from 'classnames';
import type { Icons } from '../../types/icons';

interface IconDropdownProps extends Omit<ComponentProps<typeof Dropdown>, `renderOpener`> {
  ariaLabel?: string;
  className?: string;
  buttonId?: string;
  iconClassName?: string;
  iconName?: Icons;
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
  size = `xs`,
  variant = `border-hover`,
  ...props
}: IconDropdownProps) => (
  <Dropdown
    renderOpener={({ ref, activeIndex, ...openerProps }) => (
      <Button
        variant={variant}
        size={size}
        ref={ref}
        aria-label={ariaLabel}
        square={true}
        id={buttonId}
        className={className}
        {...openerProps}
      >
        <span className={classNames(`h-icon-${iconName}`, iconClassName)}></span>
      </Button>
    )}
    {...props}
  >
    {children}
  </Dropdown>
);

export { IconDropdown };
