import React from 'react';
import { Dropdown } from './Dropdown';
import type { Placement } from '@floating-ui/react';
import { Button, ButtonSize, ButtonVariant } from 'components/Button';
import classNames from 'classnames';
import type { Icons } from '../../types/icons';

interface IconDropdownProps {
  componentClass?: string;
  buttonAriaLabel?: string;
  buttonClass?: string;
  buttonId?: string | undefined;
  iconClass?: string;
  iconName?: Icons;
  placement?: Placement;
  children: JSX.Element[] | JSX.Element;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const IconDropdown = ({
  buttonAriaLabel = ``,
  buttonClass = ``,
  buttonId = ``,
  children,
  iconClass = ``,
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
        aria-label={buttonAriaLabel}
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
