import React from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';

interface DropdownMenuItemProps {
  label: string;
  onSelect: () => void;
  variant?: `normal` | `delete`;
}

export const DropdownMenuItem = ({ label, onSelect, variant = `normal` }: DropdownMenuItemProps) => {
  const { activeIndex, getItemProps, setOpen } = useDropdownContext();
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;

  return (
    <li
      className={classNames(`h-dropdown__menu__item `, {
        'h-dropdown__menu__item--active': isActive,
        'h-dropdown__menu__item--delete': isActive && variant === `delete`,
      })}
    >
      <button
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        {...getItemProps({
          onClick() {
            setOpen(false);
            return onSelect();
          },
        })}
      >
        {label}
      </button>
    </li>
  );
};
