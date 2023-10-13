import React, { HTMLAttributes } from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface DropdownMenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
  buttonClassName?: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  iconName?: Icons;
  label: string;
  onClick: () => void;
  useSelect?: string;
  variant?: `default` | `negative`;
}

export const DropdownMenuButton = ({
  buttonClassName,
  children,
  className,
  iconName,
  label,
  onClick,
  variant = `default`,
  ...props
}: DropdownMenuButtonProps) => {
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
      <button
        className={classNames(`h-dropdown__menu__item__cta`, buttonClassName)}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            e.stopPropagation();
            setOpen(false);
            return onClick();
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
      </button>
    </li>
  );
};
