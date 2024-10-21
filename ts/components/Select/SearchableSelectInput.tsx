import React, { InputHTMLAttributes } from 'react';
import { useSelectContext } from './SelectContext';
import { TextInput } from '../TextInput';
import classNames from 'classnames';

interface SearchableSelectInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, `className`> {
  /** Array of options for the dropdown menu. */
  options: any[];
  /** Adds class names to the dropdown menu item. */
  className?: string;
  /** Callback function when the query is changed. */
  handleQuery?: (query: string) => void;
  /** Adds class names to the dropdown menu item button. */
  inputClassName?: string;
  /** Sets the correct select behavior for multiselect menus. */
  multiSelect?: boolean;
  /** Callback function when the dropdown menu item is selected using the "Enter" key. */
  onKeyDown?: (value?: any) => void;
  /** Sets placeholder text for the input. */
  placeholder?: string;
}

export const SearchableSelectInput = ({
  options,
  className,
  handleQuery,
  inputClassName,
  multiSelect,
  placeholder = `Search...`,
  onKeyDown,
  ...props
}: SearchableSelectInputProps) => {
  const { activeIndex, setActiveIndex, handleSearchableSelect, handleMultiSelect, searchInputRef } =
    useSelectContext();

  return (
    <div className={classNames(`h-border-bottom-shared-component p-2`, className)}>
      <TextInput
        type="text"
        leftIconClassName="h-icon-search"
        className={inputClassName}
        placeholder={placeholder}
        onChange={(e) => {
          handleQuery?.(e.target.value);
          setActiveIndex(0);
        }}
        onKeyDown={(e) => {
          if (e.key === `Enter`) {
            e.preventDefault();
            if (activeIndex !== null && options[activeIndex]) {
              const selectedOption = options[activeIndex];
              if (multiSelect) {
                handleMultiSelect?.(selectedOption);
              } else {
                handleSearchableSelect?.(selectedOption.label, selectedOption.value);
              }
              onKeyDown?.(selectedOption.value);
            }
          }
        }}
        variant="filled"
        ref={searchInputRef}
        {...props}
      />
    </div>
  );
};
