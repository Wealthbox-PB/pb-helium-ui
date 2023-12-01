import React, { ButtonHTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { useListItem } from '@floating-ui/react';
import { useDropdownContext } from './DropdownContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface DropdownMenuButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    `className` | `onClick` | `onKeyDown` | `onMouseDown` | `onSelect`
  > {
  buttonClassName?: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  iconName?: Icons;
  label: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onEnter?: (e: KeyboardEvent) => void;
  onSelect?: (e: MouseEvent<HTMLElement> | KeyboardEvent | undefined) => void;
  useSelect?: string;
  variant?: `default` | `negative`;
  closeOnSelect?: boolean;
}

export const DropdownMenuButton = ({
  buttonClassName,
  children,
  className,
  iconName,
  label,
  onClick,
  onEnter,
  onSelect,
  closeOnSelect = true,
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
        {...props}
        className={classNames(`h-dropdown__menu__item__cta`, buttonClassName)}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            if (closeOnSelect) {
              setOpen(false);
            }
            onClick?.(e);
            onSelect?.(e);
          },
          onMouseDown(e) {
            e.preventDefault();
          },
          onKeyDown(e) {
            if (e.key === `Enter`) {
              if (closeOnSelect) {
                setOpen(false);
              }
              onEnter?.(e);
              onSelect?.(e);
            }
          },
        })}
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
