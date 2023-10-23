import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useListItem } from '@floating-ui/react';
import { useSelectContext } from './SelectContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface SelectMenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
  buttonClassName?: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  iconName?: Icons;
  label: string;
  onClick: (e?: MouseEvent<HTMLElement>) => void;
  useSelect?: string;
  variant?: `default` | `negative`;
}

export const SelectMenuButton = ({
  buttonClassName,
  children,
  className,
  iconName,
  label,
  onClick,
  variant = `default`,
  ...props
}: SelectMenuButtonProps) => {
  const { activeIndex, getItemProps, handleSelect, selectedIndex, setOpen } = useSelectContext();
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <li
      className={classNames(`h-dropdown__menu__item `, className, {
        'h-dropdown__menu__item--active': isActive,
        'h-dropdown__menu__item--negative': isActive && variant === `negative`,
      })}
    >
      <button
        className={classNames(
          `h-dropdown__menu__item__cta h-dropdown__menu__item__cta--select`,
          buttonClassName
        )}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            handleSelect(index);
            setOpen(false);
            onClick(e);
          },
        })}
        {...props}
      >
        {children || (
          <>
            <span
              className={classNames(`h-dropdown__menu__item__cta-selected me-1`, {
                'h-icon-task': isSelected,
              })}
            ></span>
            {iconName ? <span className={`h-icon-${iconName} me-1`}></span> : null}
            {label}
          </>
        )}
      </button>
    </li>
  );
};
