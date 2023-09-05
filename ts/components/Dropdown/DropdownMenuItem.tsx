import React from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';

interface DropdownMenuItemProps {
  label: string;
  onClick: () => void;
  variant?: `normal` | `negative`;
}

export const DropdownMenuItem = ({ label, onClick, variant = `normal` }: DropdownMenuItemProps) => {
  const { activeIndex, getItemProps, setOpen } = useDropdownContext();
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;

  return (
    <li
      className={classNames(`h-dropdown__menu__item `, {
        'h-dropdown__menu__item--active': isActive,
        'h-dropdown__menu__item--negative': isActive && variant === `negative`,
      })}
    >
      <button
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick() {
            setOpen(false);
            return onClick();
          },
        })}
      >
        {label}
      </button>
    </li>
  );
};
