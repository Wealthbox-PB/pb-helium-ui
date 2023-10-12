import React, { HTMLAttributes } from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface DropdownMenuLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, `className`> {
  className?: string;
  iconName?: Icons;
  label: string;
  linkClassName?: string;
  useSelect?: string;
  variant?: `default` | `negative`;
}

export const DropdownMenuLink = ({
  label,
  iconName,
  variant = `default`,
  className,
  linkClassName,
  ...props
}: DropdownMenuLinkProps) => {
  const { activeIndex, getItemProps, setOpen } = useDropdownContext();
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;

  return (
    <li
      className={classNames(`h-dropdown__menu__item `, className, {
        'h-dropdown__menu__item--active': isActive,
        'h-dropdown__menu__item--negative': isActive && variant === `negative`,
      })}
    >
      <a
        className={classNames(`h-dropdown__menu__item__cta`, linkClassName)}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            e.stopPropagation();
            setOpen(false);
          },
        })}
        {...props}
      >
        {iconName ? <span className={`h-icon-${iconName} me-1`}></span> : null}
        {label}
      </a>
    </li>
  );
};
