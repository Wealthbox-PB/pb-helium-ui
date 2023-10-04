import React, { useMemo, useState } from 'react';
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
import { DropdownContext } from './DropdownContext';
import { Portal } from 'components/Portal';

interface RenderOpenerProps {
  ref: (node: ReferenceType | null) => void;
}

interface DropdownProps {
  renderOpener: (props: RenderOpenerProps) => JSX.Element;
  children: JSX.Element | JSX.Element[];
  placement?: Placement;
  width?: `auto` | `full` | number;
}

const Dropdown = ({ renderOpener, placement = `bottom-end`, children, width = `auto` }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      flip(),
      shift({ padding: 4, limiter: limitShift() }),
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxWidth: width === `auto` ? `${rects.reference.width}px` : width + `px` || null,
            maxHeight: `${availableHeight - 4}px`,
            width: width === `full` ? `${rects.reference.width}px` : width === `auto` ? null : width + `px`,
          });
        },
      }),
    ],
    onOpenChange: setOpen,
  });

  const elementsRef = React.useRef<HTMLElement[]>([]);
  const labelsRef = React.useRef<(string | null)[]>([]);

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

  const dropdownContext = useMemo(
    () => ({ activeIndex, getItemProps, setOpen }),
    [activeIndex, getItemProps, setOpen]
  );

  return (
    <>
      {renderOpener({
        ref: setReference,
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
        <DropdownContext.Provider value={dropdownContext}>
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
        </DropdownContext.Provider>
      ) : null}
    </>
  );
};

export { Dropdown };
