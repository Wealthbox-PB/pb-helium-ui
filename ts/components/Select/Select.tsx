import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  limitShift,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useTypeahead,
  size,
} from '@floating-ui/react';
import type { Placement, ReferenceType } from '@floating-ui/react';
import { SelectContext } from './SelectContext';
import { Portal } from '../Portal';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
  selectedLabel: string | null;
}

interface SelectProps {
  /** Content for the dropdown. */
  children: JSX.Element | JSX.Element[];
  /** The dropdown opener element. Use the destructured "ref" and "...props" to spread them onto the
   * opener element. */
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  /** Controls whether the dropdown should be close when an item is selected. */
  closeOnSelect?: boolean;
  /** Controls whether the dropdown should flip it's orientation based on the available space in the browser
   * window. */
  flip?: boolean;
  /** Controls the height of the dropdown. */
  height?: string;
  /** Controls the initial selected value. */
  initialSelectedValue?: string | null;
  /** Controls the initial selected index. */
  initialSelectedIndex?: number | null;
  /** Controls the maximum height of the dropdown. */
  maxHeight?: number;
  /** Controls the minimum height of the dropdown. */
  minHeight?: number;
  /** Controls the placement of the dropdown. */
  placement?: Placement;
  /** Controls the width of the dropdown. "full" width makes the dropdown the same width as the opener
   * element. */
  width?: `auto` | `full` | number;
}

const Select = ({
  children,
  closeOnSelect = true,
  flip: flipProp = true,
  initialSelectedValue = null,
  initialSelectedIndex = null,
  minHeight,
  placement = `bottom-end`,
  renderOpener,
  width = `auto`,
  maxHeight,
  height = `auto`,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(initialSelectedIndex);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(initialSelectedValue);

  const {
    x,
    y,
    refs: { setReference, setFloating },
    strategy,
    context,
  } = useFloating({
    open,
    whileElementsMounted: autoUpdate,
    placement: placement,
    strategy: `absolute`,
    middleware: [
      offset(4),
      flip({ mainAxis: flipProp }),
      shift({ padding: 4, limiter: limitShift() }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight:
              height === `auto`
                ? maxHeight
                  ? `${Math.min(maxHeight, availableHeight) - 4}px`
                  : `${availableHeight - 4}px`
                : null,
            minHeight: height == `auto` ? (minHeight ? `${minHeight - 4}px` : null) : null,
            height: height,
            width: width === `full` ? `${rects.reference.width}px` : width === `auto` ? null : width + `px`,
          });
        },
      }),
    ],
    onOpenChange: setOpen,
  });

  const elementsRef = useRef<HTMLElement[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      closeOnSelect && setOpen(false);
      if (index !== null) {
        setSelectedLabel(labelsRef.current[index]);
      }
    },
    [closeOnSelect],
  );

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useDismiss(context),
    useClick(context),
    listNavigation,
    typeahead,
  ]);

  const selectContext = useMemo(
    () => ({ activeIndex, getItemProps, handleSelect, selectedIndex }),
    [activeIndex, getItemProps, handleSelect, selectedIndex],
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
                className="h-dropdown h-overflow-auto"
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
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
                <ul className="h-dropdown__menu">
                  <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    {children}
                  </FloatingList>
                </ul>
              </div>
            </FloatingFocusManager>
          </Portal>
        </SelectContext.Provider>
      ) : null}
    </>
  );
};

export { Select };
