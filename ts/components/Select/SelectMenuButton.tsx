import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useListItem } from '@floating-ui/react';
import { useSelectContext } from './SelectContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';

interface SelectMenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick`> {
  /** Callback function when the dropdown menu item is clicked. */
  onClick: (e?: MouseEvent<HTMLElement>) => void;
  /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
   * this content. */
  label: string;
  /** Adds class names to the dropdown menu item button. */
  buttonClassName?: string;
  /** Content for the select menu item button. Setting children will override the default behavior of the
   * label, select checkmark, and icon being displayed. */
  children?: JSX.Element[] | JSX.Element;
  /** Adds class names to the dropdown menu item. */
  className?: string;
  /** Displays an icon to the left of the label. Setting children will override this content. */
  iconName?: Icons;
  /** Controls the variant of the dropdown menu item. */
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
  const { activeIndex, getItemProps, handleSelect, selectedIndex } = useSelectContext();
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
          buttonClassName,
        )}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            handleSelect(index);
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
