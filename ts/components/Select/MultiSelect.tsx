import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal, PortalProps } from '../Portal';
import { useSelect } from '../../hooks/useSelect';
import { SelectMenuButton } from './SelectMenuButton';
import { SearchableSelectInput } from './SearchableSelectInput';
import { DropdownMenuSeparator } from '../Dropdown/DropdownMenuSeparator';
import { Checkbox } from '../Checkbox';
import classNames from 'classnames';
import _ from 'lodash';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  selectedLabels: string[] | null;
}

interface MultiSelectProps {
  /** The initial options for the dropdown list. */
  initialOptions: { label: string; value: any }[];
  /** The dropdown opener element. Use the destructured "ref", "selectedLabel", and "...props" to spread them
   * onto the opener element for correct functionality. */
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  /** Controls whether the user can specify a selectable custom value. */
  allowCustomValue?: boolean;
  /** Controls whether the dropdown should flip its orientation based on the available space in the browser
   * window. */
  flip?: boolean;
  /** Controls the height of the dropdown. */
  height?: string;
  /** Controls the initial selected value. */
  initialSelectedValue?: any[];
  /** Controls the maximum height of the dropdown. */
  maxHeight?: number;
  /** Controls the minimum height of the dropdown. */
  minHeight?: number;
  /** Name for the hidden input. The hidden input requires a name to render */
  name?: string;
  /** Controls the placement of the dropdown. */
  placement?: Placement;
  /** Props passed into the Portal element. */
  portalProps?: Omit<PortalProps, `children`>;
  /** Controls whether the dropdown is searchable. */
  searchable?: boolean;
  /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
   * element. */
  width?: `auto` | `full` | number;
}

const MultiSelect = ({
  initialOptions,
  renderOpener,
  allowCustomValue = false,
  flip = true,
  height = `auto`,
  initialSelectedValue = [],
  maxHeight,
  minHeight,
  name,
  placement = `bottom-end`,
  portalProps,
  searchable = false,
  width = `auto`,
}: MultiSelectProps) => {
  const [multiSelectValue, setMultiSelectValue] = useState<any[]>(initialSelectedValue);
  const [selectedLabels, setSelectedLabels] = useState<string[]>(
    initialSelectedValue.map((item) => item.label),
  );
  const [sortedOptions, setSortedOptions] = useState<any[]>([]);
  const [displayOptions, setDisplayOptions] = useState<any[]>(initialOptions);
  const [query, setQuery] = useState(``);
  const [queryExists, setQueryExists] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  const handleQuery = (query: string) => {
    setQuery(query);
  };

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    labelsRef,
    elementsRef,
    xPosition,
    yPosition,
    setReference,
    setFloating,
    strategy,
    open,
    setOpen,
    activeIndex,
    setActiveIndex,
    context,
    searchInputRef,
  } = useSelect({
    flip,
    height,
    handleQuery,
    maxHeight,
    minHeight,
    placement,
    width,
    virtualFocus: searchable,
  });

  const isCustomValueDisplayed = query && allowCustomValue && !queryExists;
  const isCustomValue = isCustomValueDisplayed && activeIndex === displayOptions.length - 1;

  const handleSelectAll = () => {
    if (allSelected) {
      const filteredSelectedOptions = multiSelectValue.filter(
        (option) => !displayOptions.find((item) => item.value === option.value),
      );
      setMultiSelectValue(filteredSelectedOptions);
      setSelectedLabels(filteredSelectedOptions.map((item) => item.label));
    } else {
      const optionsToSelect = displayOptions.filter((option, i) => {
        if (isCustomValueDisplayed && i === displayOptions.length - 1) {
          return false;
        } else {
          return multiSelectValue.find((item) => item.value === option.value) === undefined;
        }
      });
      setMultiSelectValue([...multiSelectValue, ...optionsToSelect]);
      setSelectedLabels([...selectedLabels, ...optionsToSelect.map((item) => item.label)]);
      if (searchable) {
        searchInputRef.current?.focus();
      }
    }
  };

  const handleMultiSelect = useCallback(
    (object: { label; value }) => {
      if (object !== null) {
        if (multiSelectValue.find((item) => item.value === object.value)) {
          setMultiSelectValue(multiSelectValue.filter((item) => item.value !== object.value));
          setSelectedLabels(selectedLabels.filter((item) => item !== object.label));
        } else {
          setMultiSelectValue([...multiSelectValue, object]);
          setSelectedLabels([...selectedLabels, object.label]);
          if (isCustomValue) {
            setSortedOptions([...sortedOptions, object]);
          }
        }
        if (searchable) {
          searchInputRef.current?.focus();
        }
      }
    },
    [multiSelectValue, selectedLabels, sortedOptions, isCustomValue, searchable, searchInputRef],
  );

  useEffect(() => {
    const selectedDisplayOptions = _.intersection(multiSelectValue, displayOptions);
    const allChecked = isCustomValueDisplayed
      ? selectedDisplayOptions.length === displayOptions.length - 1
      : selectedDisplayOptions.length === displayOptions.length;
    const someChecked = selectedDisplayOptions.length ? true : false;
    setAllSelected(allChecked);
    setIsIndeterminate(someChecked && !allChecked);
  }, [multiSelectValue, displayOptions, isCustomValueDisplayed]);

  useEffect(() => {
    if (!open) {
      const filteredOptions = initialOptions.filter(
        (option) => multiSelectValue.find((item) => item.value === option.value) === undefined,
      );

      setSortedOptions([...multiSelectValue, ...filteredOptions]);
    }
  }, [initialOptions, multiSelectValue, open]);

  useEffect(() => {
    const queriedOptions = sortedOptions.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase()),
    );
    const existingQuery =
      queriedOptions.find((option) => option.label.toLowerCase() === query.toLowerCase()) !== undefined;
    setQueryExists(existingQuery);

    if (isCustomValueDisplayed) {
      setDisplayOptions([...queriedOptions, { label: query, value: query }]);
    } else {
      setDisplayOptions(queriedOptions);
    }
  }, [query, allowCustomValue, sortedOptions, isCustomValueDisplayed]);

  const selectContext = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      multiSelectValue,
      handleMultiSelect,
      searchInputRef,
    }),
    [activeIndex, setActiveIndex, getItemProps, multiSelectValue, handleMultiSelect, searchInputRef],
  );

  return (
    <>
      {renderOpener({
        ref: setReference,
        selectedLabels,
        ...getReferenceProps({
          onClick(e) {
            setOpen(!open);
            e.stopPropagation();
            // Normalize button focus while clicking on Safari.
            (e.currentTarget as HTMLButtonElement).focus();
          },
          onKeyPress(e) {
            // This stops propagation up to the parent onKeyPress, which then triggers both the onKeyPress and
            //   the onClick because buttons trigger key presses as clicks
            e.stopPropagation();
          },
          open,
          tabIndex: 0,
        }),
      })}
      {open ? (
        <SelectContext.Provider value={selectContext}>
          <Portal
            className={classNames(`h-floating-ui h-floating-ui--dropdowns`, portalProps?.className)}
            selector={portalProps?.selector}
          >
            <FloatingFocusManager context={context}>
              <div
                ref={setFloating}
                className={classNames(`h-dropdown h-overflow-auto`, {
                  'p-0 d-flex flex-column': searchable,
                })}
                style={{
                  position: strategy,
                  top: yPosition ?? 0,
                  left: xPosition ?? 0,
                }}
                role="menu"
                {...getFloatingProps({
                  // Pressing tab dismisses the menu due to the modal
                  // focus management on the root menu.
                  onKeyDown(event) {
                    if (event.key === `Tab`) {
                      setOpen(false);
                    }
                  },
                })}
              >
                {searchable ? (
                  <SearchableSelectInput
                    handleQuery={handleQuery}
                    options={displayOptions}
                    multiSelect={true}
                    inputClassName="m-1"
                  />
                ) : null}
                <div className="h-overflow-auto">
                  <ul
                    className={classNames(`h-dropdown__menu`, {
                      'p-2': searchable,
                    })}
                  >
                    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                      {displayOptions.length ? (
                        <>
                          <li className="h-dropdown__menu__select-all">
                            <Checkbox
                              checked={allSelected}
                              indeterminate={isIndeterminate}
                              onChange={handleSelectAll}
                              label={query ? `Select All Matching` : `Select All`}
                              size="sm"
                              className={classNames(`h-dropdown__menu__select-all__btn d-flex py-2`)}
                              labelClassName="ps-1 h-color-text-gray-700"
                            />
                          </li>
                          {displayOptions.map((option, i) => {
                            const customValueOption =
                              isCustomValueDisplayed && i === displayOptions.length - 1;
                            return (
                              <React.Fragment key={JSON.stringify(option.value)}>
                                {customValueOption ? <DropdownMenuSeparator /> : null}
                                <SelectMenuButton
                                  label={`${customValueOption ? `Specify: ` : ``}${option.label}`}
                                  value={option}
                                  multiSelect={true}
                                  searchableMenu={searchable}
                                  customValue={customValueOption ? true : false}
                                  buttonClassName="py-2"
                                />
                              </React.Fragment>
                            );
                          })}
                        </>
                      ) : (
                        <li className="text-center h-color-text-light py-2">No results found.</li>
                      )}
                    </FloatingList>
                  </ul>
                </div>
              </div>
            </FloatingFocusManager>
          </Portal>
        </SelectContext.Provider>
      ) : null}
      {name ? (
        <input
          type="hidden"
          name={name}
          data-testid="multi-select-input"
          value={JSON.stringify(multiSelectValue) || ``}
        />
      ) : null}
    </>
  );
};

export { MultiSelect };
