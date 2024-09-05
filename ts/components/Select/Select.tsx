import React, { useCallback, useMemo, useState } from 'react';
import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal } from '../Portal';
import { useSelect } from '../../hooks/useSelect';
import classNames from 'classnames';
import { SearchableSelectInput } from './SearchableSelectInput';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  selectedLabel: string | null;
}

interface SelectProps {
  /** Content for the dropdown. */
  children: JSX.Element | JSX.Element[];
  /** The dropdown opener element. Use the destructured "ref", "selectedLabel", and "...props" to spread them
   * onto the opener element for correct functionality. */
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  /** Controls whether the dropdown should be closed when an item is selected. */
  closeOnSelect?: boolean;
  /** Array of currently displayed options in dropdown menu that gets passed into the
   * SearchableSelectInput. */
  displayOptions?: any[];
  /** Controls whether the dropdown should flip its orientation based on the available space in the browser
   * window. */
  flip?: boolean;
  /** Controls the height of the dropdown. */
  height?: string;
  /** Controls the initial selected label. */
  initialSelectedLabel?: string | null;
  /** Controls the initial selected value. */
  initialSelectedValue?: any | null;
  /** Callback function when the query is changed. Used for searchable select. */
  handleQuery?: (query: string) => void;
  /** Controls the maximum height of the dropdown. */
  maxHeight?: number;
  /** Controls the minimum height of the dropdown. */
  minHeight?: number;
  /** Name for the hidden input. The hidden input requires a name to render */
  name?: string;
  /** Controls the placement of the dropdown. */
  placement?: Placement;
  /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
   * element. */
  width?: `auto` | `full` | number;
  /** Controls weather the focus will remain on the render opener, but allow arrow keys to navigate list. */
  virtualFocus?: boolean;
}

const Select = ({
  children,
  renderOpener,
  closeOnSelect = true,
  displayOptions,
  flip = true,
  handleQuery,
  height = `auto`,
  initialSelectedLabel = null,
  initialSelectedValue = null,
  maxHeight,
  minHeight,
  name,
  placement = `bottom-end`,
  width = `auto`,
  virtualFocus = false,
}: SelectProps) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(initialSelectedLabel);
  const [selectedValue, setSelectedValue] = useState<string | null>(initialSelectedValue);

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
  } = useSelect({
    flip,
    height,
    handleQuery,
    maxHeight,
    minHeight,
    placement,
    width,
    virtualFocus,
  });

  const handleSelect = useCallback(
    (index: number | null, value: string | null) => {
      closeOnSelect && setOpen(false);
      if (index !== null) {
        setSelectedLabel(labelsRef.current[index]);
        setSelectedValue(value);
      }
    },
    [closeOnSelect, labelsRef, setOpen],
  );

  const handleSearchableSelect = useCallback(
    (label: string | null, value: any | null) => {
      closeOnSelect && setOpen(false);
      if (label && value) {
        setSelectedLabel(label);
        setSelectedValue(value);
      }
    },
    [closeOnSelect, setOpen],
  );

  const selectContext = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      handleSearchableSelect,
      handleSelect,
      selectedValue,
    }),
    [activeIndex, setActiveIndex, getItemProps, handleSearchableSelect, handleSelect, selectedValue],
  );

  return (
    <>
      {renderOpener({
        ref: setReference,
        selectedLabel,
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
          <Portal className="h-floating-ui h-floating-ui--dropdowns">
            <FloatingFocusManager context={context}>
              <div
                ref={setFloating}
                className={classNames(`h-dropdown h-overflow-auto`, {
                  'p-0 d-flex flex-column': handleQuery,
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
                {handleQuery ? (
                  <SearchableSelectInput
                    handleQuery={handleQuery}
                    options={displayOptions?.length ? displayOptions : []}
                    inputClassName="m-1"
                  />
                ) : null}
                <div className="h-overflow-auto">
                  <ul
                    className={classNames(`h-dropdown__menu`, {
                      'p-2': handleQuery,
                    })}
                  >
                    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                      {children}
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
          value={typeof selectedValue === `string` ? selectedValue : JSON.stringify(selectedValue) || ``}
        />
      ) : null}
    </>
  );
};

export { Select };
