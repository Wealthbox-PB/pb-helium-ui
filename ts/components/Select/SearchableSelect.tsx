import React, { ComponentProps, useEffect, useState } from 'react';
import { Select } from './Select';
import { SelectMenuButton } from './SelectMenuButton';
import { SelectInput } from '../SelectInput';
import { DropdownMenuSeparator } from '../Dropdown/DropdownMenuSeparator';

interface SearchableSelectProps
  extends Omit<ComponentProps<typeof Select>, `renderOpener` | `children` | `initialSelectedValue`> {
  /** Initial options for the dropdown menu. */
  initialOptions: { label: string; value: any }[];
  /** Controls whether the user can specify a selectable custom value. */
  allowCustomValue?: boolean;
  /** Adds an aria-label to the button. */
  ariaLabel?: string;
  /** Adds class names to the button. */
  className?: string;
  /** Initial selected value for the dropdown menu. */
  initialSelectedValue?: string;
  /** Adds class names to the label */
  labelClassName?: string;
  /** Callback function when the dropdown menu item is clicked. */
  onSelect?: () => void;
  /** Sets placeholder text for the input. */
  placeholder?: string;
  /** Adds an id to the select button. */
  selectId?: string;
  /** Adds a label to the select button. */
  selectLabel?: string;
}

const SearchableSelect = ({
  initialOptions,
  allowCustomValue = false,
  ariaLabel,
  className,
  initialSelectedValue,
  labelClassName,
  onSelect,
  placeholder = `Select...`,
  selectId,
  selectLabel,
  ...props
}: SearchableSelectProps) => {
  const [query, setQuery] = useState(``);
  const [options, setOptions] = useState(initialOptions);
  const [queryExists, setQueryExists] = useState(false);

  const initialLabel =
    initialOptions.find((option) => option.value === initialSelectedValue)?.label || initialSelectedValue;
  const isCustomValueDisplayed = query && allowCustomValue && !queryExists;

  useEffect(() => {
    const filteredOptions = initialOptions.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase()),
    );
    const existingQuery =
      filteredOptions.find((option) => option.label.toLowerCase() === query.toLowerCase()) !== undefined;
    setQueryExists(existingQuery);

    if (isCustomValueDisplayed) {
      setOptions([...filteredOptions, { label: query, value: query }]);
    } else {
      setOptions(filteredOptions);
    }
  }, [query, initialOptions, allowCustomValue, isCustomValueDisplayed]);

  return (
    <Select
      renderOpener={({ ref, selectedLabel, ...openerProps }) => (
        <SelectInput
          ref={ref}
          value={selectedLabel}
          placeholder={placeholder}
          label={selectLabel}
          aria-label={ariaLabel}
          id={selectId}
          className={className}
          labelClassName={labelClassName}
          {...openerProps}
        />
      )}
      initialSelectedLabel={initialLabel}
      initialSelectedValue={initialSelectedValue}
      virtualFocus={true}
      handleQuery={(query) => setQuery(query)}
      displayOptions={options}
      {...props}
    >
      <>
        {options.length ? (
          options.map((option, i) => {
            const customValueOption = i === options.length - 1 && isCustomValueDisplayed;

            return (
              <React.Fragment key={option.value}>
                {customValueOption && options.length > 1 ? <DropdownMenuSeparator /> : null}
                <SelectMenuButton
                  label={`${customValueOption ? `Specify: ` : ``}${option.label}`}
                  value={option.value}
                  searchableMenu={true}
                  onClick={onSelect}
                  customValue={customValueOption ? true : false}
                />
              </React.Fragment>
            );
          })
        ) : (
          <li className="h-dropdown__menu__item h-dropdown__menu__item--empty">No results found.</li>
        )}
      </>
    </Select>
  );
};

export { SearchableSelect };
