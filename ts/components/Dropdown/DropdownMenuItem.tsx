import React from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';

export const DropdownMenuItem = ({ label, onSelect }) => {
  const { activeIndex, getItemProps } = useDropdownContext();
  const { ref, index } = useListItem();

  const isActive = activeIndex === index;
  return (
    <li className={`h-dropdown__menu__item `}>
      <button
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        {...getItemProps({
          onClick() {
            return onSelect();
          },
        })}
      >
        {label}
      </button>
    </li>
  );
};
