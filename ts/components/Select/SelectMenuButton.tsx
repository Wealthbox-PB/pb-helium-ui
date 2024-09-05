import React, { ButtonHTMLAttributes, MouseEvent, useCallback } from 'react';
import { useListItem } from '@floating-ui/react';
import { useSelectContext } from './SelectContext';
import classNames from 'classnames';
import { Icons } from '../../types/icons';
import { Checkbox } from '../Checkbox';

interface SelectMenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, `className` | `onClick` | `value`> {
  /** Text used for the dropdown menu item, and for the typeahead matching. Setting children will override
   * this content. */
  label: string;
  /** Value for the dropdown menu item. */
  value: any;
  /** Adds class names to the dropdown menu item button. */
  buttonClassName?: string;
  /** Content for the select menu item button. Setting children will override the default behavior of the
   * label, select checkmark, and icon being displayed. */
  children?: JSX.Element[] | JSX.Element;
  /** Adds class names to the dropdown menu item. */
  className?: string;
  /** Controls whether the item is specified by the select input. */
  customValue?: boolean;
  /** Controls whether the dropdown menu item is disabled or not. */
  disabled?: boolean;
  /** Displays an icon to the left of the label. Setting children will override this content. */
  iconName?: Icons;
  /** Displays a checkbox next to the label for multiselect menus. */
  multiSelect?: boolean;
  /** Callback function when the dropdown menu item is clicked. */
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  /** Controls which select handler is used, */
  searchableMenu?: boolean;
  /** Controls the variant of the dropdown menu item. */
  variant?: `default` | `negative`;
}

export const SelectMenuButton = ({
  buttonClassName,
  children,
  className,
  disabled,
  iconName,
  label,
  multiSelect,
  onClick,
  searchableMenu,
  customValue = false,
  variant = `default`,
  value,
  ...props
}: SelectMenuButtonProps) => {
  const {
    activeIndex,
    getItemProps,
    handleSearchableSelect,
    handleSelect,
    handleMultiSelect,
    multiSelectValue,
    selectedValue,
  } = useSelectContext();
  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;
  const isSelected = multiSelect
    ? multiSelectValue && multiSelectValue.find((item) => item === value) !== undefined
    : selectedValue === value && !customValue;

  const clickCallback = useCallback(() => {
    multiSelect
      ? handleMultiSelect?.(value)
      : searchableMenu
        ? handleSearchableSelect?.(customValue ? value : label, value)
        : handleSelect?.(index, value as any);
  }, [
    handleMultiSelect,
    handleSearchableSelect,
    handleSelect,
    index,
    value,
    label,
    customValue,
    multiSelect,
    searchableMenu,
  ]);

  return (
    <li
      className={classNames(`h-dropdown__menu__item`, className, {
        'h-dropdown__menu__item--active': isActive,
        'h-dropdown__menu__item--negative': isActive && variant === `negative`,
      })}
    >
      <button
        className={classNames(
          `h-dropdown__menu__item__cta h-dropdown__menu__item__cta--select d-flex align-items-center`,
          buttonClassName,
          {
            'h-dropdown__menu__item__cta--disabled': disabled,
          },
        )}
        ref={ref}
        tabIndex={isActive ? 0 : -1}
        role="menuitem"
        {...getItemProps({
          onClick(e) {
            clickCallback();
            onClick?.(e);
          },
        })}
        disabled={disabled}
        {...props}
      >
        {multiSelect ? (
          <Checkbox checked={isSelected} size="sm" className="me-1" onChange={() => {}} />
        ) : (
          <span
            className={classNames(`h-dropdown__menu__item__cta-selected h-font-size-lg me-1`, {
              'h-icon-task h-color-text-blue-500': isSelected,
            })}
            data-testid="h-dropdown__menu__item__cta-selected"
          ></span>
        )}
        {children || (
          <>
            {iconName ? <span className={`h-icon-${iconName} me-1`}></span> : null}
            <div className="text-ellipsis">{label}</div>
          </>
        )}
      </button>
    </li>
  );
};
