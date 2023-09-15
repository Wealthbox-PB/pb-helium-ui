import React from 'react';
import { Dropdown } from './Dropdown';
import type { Placement } from '@floating-ui/react';
import { Button, ButtonSize, ButtonVariant } from '../Button';
import classNames from 'classnames';
import type { Icons } from '../../types/icons';

interface IconDropdownProps {
  componentClass?: string;
  ariaLabel?: string;
  buttonClass?: string;
  buttonId?: string;
  iconClass?: string;
  iconName?: Icons;
  placement?: Placement;
  children: JSX.Element[] | JSX.Element;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const IconDropdown = ({
  ariaLabel,
  buttonClass,
  buttonId,
  children,
  iconClass,
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
        className={buttonClass}
        {...props}
      >
        <span className={classNames(`h-icon-${iconName}`, iconClass)}></span>
      </Button>
    )}
    placement={placement}
  >
    {children}
  </Dropdown>
);

export { IconDropdown };
