import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface DropdownMenuLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, `className` | `onClick`> {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  iconName?: Icons;
  label: string;
  linkClassName?: string;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  useSelect?: string;
  variant?: `default` | `negative`;
}

export const DropdownMenuLink = ({
  children,
  label,
  iconName,
  variant = `default`,
  className,
  linkClassName,
  onClick,
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
            setOpen(false);
            onClick && onClick(e);
          },
        })}
        {...props}
      >
        {children || (
          <>
            {iconName ? <span className={`h-icon-${iconName} me-1`}></span> : null}
            {label}
          </>
        )}
      </a>
    </li>
  );
};
